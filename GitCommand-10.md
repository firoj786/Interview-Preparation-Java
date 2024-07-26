10 Git Commands and Workflow That You Must Know Commands.

- Add: Adds changes in the working directory to the staging area.
- Commit: Saves the changes from the staging area to the local repository.
- Push: Uploads local repository changes to the remote repository.
- Fetch: Downloads objects and refs from another repository.
- Pull: Fetches and integrates changes from the remote repository into the local repository.
- Clone: Creates a copy of an existing remote repository.
- Checkout: Switches branches or restores working tree files.
- Rebase: Reapplies commits on top of another base tip.
- Log: Shows the commit logs.
- Status: Displays the state of the working directory and staging area.

Workflow
- Changes start in the Working Directory.
- You use Add to stage these changes, moving them to the Staging Area.
- With Commit, changes are saved in the Local Repo.
- To share these changes, you use Push to upload them to the Remote Repo.
- If you need updates from the remote repository, you can Fetch them to your local repository.
- To apply those fetched changes to your working directory, you use Pull, which fetches and merges the changes.
- If there are conflicting changes, you may need to manually merge them.


Git commands I used 99% of the time being a Software Developer for 6+ years:
1. 𝐠𝐢𝐭 𝐝𝐢𝐟𝐟: Show file differences not yet staged.
2. 𝐠𝐢𝐭 𝐜𝐨𝐦𝐦𝐢𝐭 -𝐚 -𝐦 "𝐜𝐨𝐦𝐦𝐢𝐭 𝐦𝐞𝐬𝐬𝐚𝐠𝐞": Commit all tracked changes with a message.
3. 𝐠𝐢𝐭 𝐜𝐨𝐦𝐦𝐢𝐭 --𝐚𝐦𝐞𝐧𝐝: Modify the last commit.
4. 𝐠𝐢𝐭 𝐬𝐭𝐚𝐭𝐮𝐬: Show the state of your working directory.
5. 𝐠𝐢𝐭 𝐚𝐝𝐝 𝐟𝐢𝐥𝐞_𝐩𝐚𝐭𝐡: Add file(s) to the staging area.
6. 𝐠𝐢𝐭 𝐜𝐡𝐞𝐜𝐤𝐨𝐮𝐭 -𝐛 𝐛𝐫𝐚𝐧𝐜𝐡_𝐧𝐚𝐦𝐞: Create and switch to a new branch.
7. 𝐠𝐢𝐭 𝐜𝐡𝐞𝐜𝐤𝐨𝐮𝐭 𝐛𝐫𝐚𝐧𝐜𝐡_𝐧𝐚𝐦𝐞: Switch to an existing branch.
8. 𝐠𝐢𝐭 𝐜𝐡𝐞𝐜𝐤𝐨𝐮𝐭 <𝐜𝐨𝐦𝐦𝐢𝐭>: Switches the working directory to a specific commit.
9. 𝐠𝐢𝐭 𝐩𝐮𝐬𝐡 𝐨𝐫𝐢𝐠𝐢𝐧 𝐛𝐫𝐚𝐧𝐜𝐡_𝐧𝐚𝐦𝐞: Push a branch to a remote.
10. 𝐠𝐢𝐭 𝐩𝐮𝐥𝐥: Fetch and merge remote changes.
11. 𝐠𝐢𝐭 𝐟𝐞𝐭𝐜𝐡: Fetch changes from the remote repository without merging.
12. 𝐠𝐢𝐭 𝐫𝐞𝐛𝐚𝐬𝐞 -𝐢: Rebase interactively, rewrite commit history.
13. 𝐠𝐢𝐭 𝐫𝐞𝐛𝐚𝐬𝐞 𝐛𝐫𝐚𝐧𝐜𝐡_𝐧𝐚𝐦𝐞: Rebase the current branch into another branch.
14. 𝐠𝐢𝐭 𝐜𝐥𝐨𝐧𝐞: Create a local copy of a remote repo.
15. 𝐠𝐢𝐭 𝐦𝐞𝐫𝐠𝐞: Merge branches together.
16. 𝐠𝐢𝐭 𝐥𝐨𝐠 --𝐬𝐭𝐚𝐭: Show commit logs with stats.
17. 𝐠𝐢𝐭 𝐬𝐭𝐚𝐬𝐡: Stash changes for later.
18. 𝐠𝐢𝐭 𝐬𝐭𝐚𝐬𝐡 𝐩𝐨𝐩: Apply and remove stashed changes.
 