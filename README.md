# web-dev

웹 어플리케이션 테스트 서버

## husky setting

1 npm install --save-dev husky
2 npm pkg set scripts
3 prepare="husky install"
4 npm run prepare
5 npx husky add .husky/
6 pre-commit "npm test"
7 git add .husky/pre-commit
8 git commit -m "Keep calm and commit"
