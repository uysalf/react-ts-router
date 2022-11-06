https://www.youtube.com/watch?v=UWYOC8g5N_0&list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG&index=1

https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK
/Users/fatihuysal/Projects/react/reactTypeScript/react-typescript-demo.
npm uninstall -g create-react-app
 npx create-react-app react-typescript-demo --template typescript     




…or create a new repository on the command line

echo "# react-typescript-exaples" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/uysalf/react-typescript-exaples.git
git push -u origin main
…or push an existing repository from the command line

git remote add origin https://github.com/uysalf/react-typescript-exaples.git
git branch -M main
git push -u origin main

-----------------------



git status - farkları verir 
git diff metin.txt --Bu komut size dosya üzerindeki yaptığınız değişiklikleri gösterecektir.

//check-in yapma
git add .
git commit -m "açıklama"
git push origin master
///////////
At this point there are 3 options to undo the local changes you have:
*Discard all local changes, but save them for possible re-use later
 git stash

*Discarding local changes (permanently) to a file
git checkout -- <file>

*Discard all local changes to all files permanently
git reset --hard
//////////

// Aşağıdaki komut en son yapmış olduğunuz commit'e veya son yaptığınız push'a dönmenizi sağlayacaktır.  
git reset --hard HEAD

//Aşağıdaki komut bir önceki commit'e dönmenizi sağlayacaktır.
git reset --hard HEAD~1

//Aşağıdaki komut iki önceki commit'e dönmenizi sağlayacaktır.
git reset --hard HEAD~2

Git Reset
Henüz push etmediğiniz değişiklikleri geri alacaktır . Genellikle bu işlem Git Revert ile karıştırılmaktadır ve dikkali olarak kullanılmasını öneriyorum.


https://medium.com/@aliustaoglu/git-cakismalarini-gidermenin-etkili-yollari-91b1160ce2e9



--------
git checkout master
get latest version,
git checkout otherBranch
git rebase master
senkronize et

 npm install gh-pages --save-dev
"homepage": "http://uysalf.github.io/react-ts-router",
 scripts:
   "start": "react-scripts start",
    "predeploy": "npm run build",

npm run deploy   
git save changes
