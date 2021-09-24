const fs = require('fs');
const { resolve } = require('path');

const basePath = resolve();
// 파일 경로를 객체로 저장
const filenames = {
  posts: resolve(basePath, 'server/models/posts.json'),
};
// 매칭되는 경로의 파일을 파싱해서 리턴한다.
const readDB = target => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'));
  } catch (err) {
    console.error(err);
  }
};
// 매칭되는 경로의 파일에 data을 작성 (새로 덮어 씌워지는 것에 주의)
const writeDB = (target, data) => {
  try {
    return fs.writeFileSync(filenames[target], JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

module.exports = { readDB, writeDB };
