## To deploy project in live
- Step 1:
    - Create a new repository
- Step 2:
    - In package.json
    - "homepage":"/Paste the link of the project repository/"
    - in scripts section add
        - "predeploy":"npm run build",
        - "deploy":"gh-pages -d build",
- Step 3:
    - cd reactjs/myproject
    - git init
- Step 4:
    - git add .
- Step 5:
    - git status
- Step 6:
    - git commit -m "Project"
- Step 7:
    - git branch -M main
- Step 8:
    - git remote add origin "link of the repo with .git extension"
    - If remote origin already exists error arises,use
       "git remote rm origin" command
- Step 9:
    - git push -u origin main
- Step 10:
    - npm run deploy
Now use the link in the homepage property to check whether the project is deployed.