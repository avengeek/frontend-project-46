import path from 'path'
import fs from 'fs'

const gendiff = (firstPath, secondPath) => {
  const firstFilePath = path.resolve(process.cwd(), firstPath)
  const secondFilePath = path.resolve(process.cwd(), secondPath)

  const firstFileData = fs.readFileSync(firstFilePath, 'utf-8')
  const secondFileData = fs.readFileSync(secondFilePath, 'utf-8')
  // console.log(firstFileData);
  // console.log(secondFileData);
  // const1
  // const2

  // const obj1 = parse(firstFileData, firstFileExtName);
  // console.log('obj1: ', obj1);

  // const obj2 = parse(secondFileData, secondFileExtName);
  // console.log('obj2: ', obj2);
  console.log(JSON.parse(firstFileData));
  console.log(JSON.parse(secondFileData));

  // const Tree = buildDiff(obj1, obj2)

}

export default gendiff