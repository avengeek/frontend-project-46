import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const gendiff = (firstPath, secondPath) => {
  const firstFilePath = path.resolve(process.cwd(), firstPath);
  const secondFilePath = path.resolve(process.cwd(), secondPath);

  const firstFileData = fs.readFileSync(firstFilePath, 'utf-8');
  const secondFileData = fs.readFileSync(secondFilePath, 'utf-8');
  // console.log(firstFileData);
  // console.log(secondFileData);
  const obj1 = JSON.parse(firstFileData);
  const obj2 = JSON.parse(secondFileData);

  // const obj1 = parse(firstFileData, firstFileExtName);
  // console.log('obj1: ', obj1);
  // const obj2 = parse(secondFileData, secondFileExtName);
  // console.log('obj2: ', obj2);

  const buildDiff = (obj1, obj2) => {
    const result = [];
    for (let key in obj1) {
      if (!(key in obj2)) {
        result.push(`  - ${key}: ${obj1[key]}`);
      } else if (key in obj2) {
        if (obj1[key] != obj2[key]) {
          result.push(`  + ${key}: ${obj1[key]}`);
          result.push(`  + ${key}: ${obj2[key]}`);
        } else {
          result.push(`    ${key}: ${obj1[key]}`);
        }
      }
    }
    console.log(_.sortedUniq(result).join('\n'));
  }
  const Tree = buildDiff(obj1, obj2);
}
export default gendiff