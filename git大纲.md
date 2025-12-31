 一. 拉取远程文件分两种情况：1.首次获取仓库 2.已有的仓库更新
 1.首次获取仓库：
 git clone 远程仓库地址
 cd 仓库名
 git pull origin dev //若首次拉取远程dev分支到本地就用这个指令
 2.已有仓库更新
 git branch //查看本地所有分支（当前的分支有*来标记）-a可以查看远程和本地所有
 git checkout dev //切换到已有的本地分支 (通常是dev分支） == git switch dev
 git pull //拉取该分支的远程最新内容
 二. 把本地文件推上去：
 1.git status //查看文件当前状态
 1.git pull //先全部拉下来一遍更新本地仓库
 2.git add //如果直接把本地仓库的代码文件拉去vscode里面修改的那么直接用git add vue
 3.git commit -m"比如写：重新修改的首页代码”
 4.git push -u origin dev(若是第一次推送就用这个，之后直接用git push就好了)
 -u 是 --set-upstream 的简写（缩写）形式，其核心作用是为本地分支与远程仓库的对应分支建立 “上游关联”（也叫追踪关系）
 5.git push
 6.git branch 分支名=》可以实现创建新分支
remote命令工具的使用：
命令	核心功能
git remote	列出远程仓库别名
git remote -v	列出远程别名及对应 URL（详细查询）
git remote add <别名> <URL>	添加远程仓库关联
git remote rm <别名>	删除远程仓库关联
git remote rename <旧> <新>	重命名远程仓库别名
git remote set-url <别名> <URL>	修改远程仓库 URL
git remote show <别名>	查看远程仓库完整详细信息
git remote prune <别名>	清理本地失效的远程分支引用
git remote get-url <别名>	获取远程仓库 URL（简洁查询）
git remote update	更新所有 / 指定远程的分支引用

合并方法：
方法	核心命令	关键特点	适用场景
合并法（推荐）	git checkout maingit merge devgit push origin main	保留 dev 分支完整提交历史，操作安全，支持冲突处理	常规协作、dev 分支开发完成后合并到主分支
重置法（覆盖式）	git checkout maingit reset --hard devgit push -f origin main	用 dev 完全覆盖 main，丢弃 main 原有历史	个人仓库、需彻底替换 main 内容（公共仓库禁用）
检出覆盖法（文件同步）	git checkout maingit checkout dev -- .git add . && git commit -m "同步文件"git push origin main	仅复制文件内容，不合并历史，生成新提交	快速同步文件，无需追溯 dev 分支历史
Cherry-Pick（挑选提交）	git checkout maingit cherry-pick <起始提交^>..<结束提交>git push origin main	灵活挑选 dev 的部分 / 全部提交同步	需精细控制同步的提交内容
 
1. Gitee 权限管控（修改需管理员审核）
角色基础：将开发者设为「开发者」角色（无主分支直接推送权），管理员保留「管理员」角色
关键配置：对main等核心分支设置「保护分支规则」，强制要求通过 Pull Request（PR）合并，且 PR 需至少 1 名管理员审核，同时禁止强制推送 / 删除核心分支
流程闭环：开发者在个人分支开发→推送远程→发起 PR→管理员审核通过后合并，未通过则修改后重新提交
2. Git 命令-b参数
git checkout -b 分支名中，-b是--branch的简写，作用是「创建新分支并立即切换到该分支」，等价于git branch 分支名 + git checkout 分支名
无-b时仅尝试切换到已有分支，分支不存在则报错；Git 2.23 + 也可使用git switch -c 分支名（-c等同于-b），语义更清晰
适配权限流程：开发者需基于最新main分支，用git checkout -b 功能分支名创建开发分支，避免直接修改核心分支
3. 核心逻辑
通过「分支保护 + PR 强制审核」阻断开发者直接修改核心分支，结合 Git 分支规范（如feature/xxx命名），既保障代码安全，又符合协作规范，最终实现「修改需管理员审核」的核心需求
不同仓库分支合并：
# ===================== 第一步：克隆乙仓库到本地（若已克隆则跳过） =====================
# 1. 通过SSH协议克隆乙仓库到本地（替换为实际的乙仓库SSH地址）
#    - SSH协议无需每次输入密码，前提是本地已配置GitHub SSH密钥
#    - 若用HTTPS地址：git clone https://github.com/xxx/乙仓库.git（需输入账号密码/令牌）
git clone git@github.com:xxx/乙仓库.git

# 2. 进入克隆后的乙仓库本地目录（必须进入仓库目录才能执行后续Git命令）
#    - /path/to/乙仓库 是克隆后生成的文件夹名，与仓库名一致
cd 乙仓库

# ===================== 第二步：添加甲仓库为远程仓库并拉取最新代码 =====================
# 1. 给甲仓库添加一个本地远程别名repo-a（别名可自定义，比如origin-a、jia-repo等）
#    - 作用：把甲仓库纳入本地Git的远程仓库管理，方便后续拉取/合并其分支
#    - 查看已添加的远程仓库：git remote -v（会显示repo-a对应的甲仓库地址）
git remote add repo-a git@github.com:xxx/甲仓库.git

# 2. 拉取甲仓库的所有分支、提交记录到本地（仅下载，不影响本地工作区代码）
#    - 必须执行此步，否则本地无法识别repo-a/feature/user-info分支
#    - 若甲仓库后续有更新，需重新执行git fetch repo-a拉取最新内容
git fetch repo-a

# ===================== 第三步：切换到乙仓库的目标分支并拉取最新代码 =====================
# 1. 切换到乙仓库的dev分支（目标分支，即要把甲仓库代码合并到这个分支）
#    - 若dev分支不存在（本地），需加-b参数：git checkout -b dev origin/dev
#    - 查看当前分支：git branch（带*的是当前分支）
git checkout dev

# 2. 拉取乙仓库远程dev分支的最新代码（避免本地代码落后，合并时产生不必要的冲突）
#    - origin是克隆乙仓库时默认的远程别名，指向乙仓库的远程地址
#    - 等价于：git fetch origin + git merge origin/dev
git pull origin dev

# ===================== 第四步：合并甲仓库指定分支到乙仓库目标分支 =====================
# 合并甲仓库的feature/user-info分支到当前所在的乙仓库dev分支
#    - repo-a/feature/user-info 是甲仓库分支的完整标识（远程别名/分支名）
#    - Git会自动对比两个分支的提交差异，尝试自动合并
#    - 若合并失败（冲突），Git会提示"Automatic merge failed; fix conflicts and then commit the result"
git merge repo-a/feature/user-info

# ===================== 第五步：解决冲突并提交合并结果（若有冲突） =====================
# 1. 标记所有冲突文件为"已解决"（.表示所有文件，也可指定具体文件：git add 冲突文件名）
#    - 冲突文件需手动修改（找到<<<<<<< HEAD、=======、>>>>>>> repo-a/feature/user-info标记，保留需要的代码）
#    - 修改后必须执行git add，告诉Git冲突已解决
git add .

# 2. 提交合并结果（合并成功但有冲突时，需要手动提交；无冲突时Git会自动生成合并提交）
#    - 提交信息要清晰，说明合并的来源和目的，方便后续追溯
git commit -m "合并甲仓库feature/user-info分支到乙仓库dev"

# ===================== 第六步：推送合并后的代码到乙仓库远程 =====================
# 将本地合并后的dev分支推送到乙仓库的远程dev分支
#    - 需确保有乙仓库dev分支的推送权限（否则会报错权限不足）
#    - 若推送失败，可能是远程有新提交，需先git pull origin dev再推送
git push origin dev

# ===================== 可选：清理临时添加的甲仓库远程 =====================
# 删除本地的repo-a远程别名（合并完成后无需保留，不影响甲/乙仓库本身）
#    - 仅删除本地别名，不会影响甲仓库的远程数据
git remote remove repo-a


# 替换为你复制的 GitHub 匿名邮箱
git config --global user.email "你的匿名邮箱@users.noreply.github.com"
# 验证修改：输出刚设置的匿名邮箱即成功
git config --global user.email

# 替换为你的实际信息：用户名（如Xiaoyi-f） + 匿名邮箱（160247210+Xiaoyi-f@users.noreply.github.com）
git commit --amend --author="Xiaoyi-f <160247210+Xiaoyi-f@users.noreply.github.com>"

git push -u origin master

