import { Express, Router, Request, Response } from 'express';
import * as fs from 'fs';
import * as multer from 'multer';

const DIR = 'upload/';

const upload = multer({
  dest: DIR
});
// const upload = multer({
//   storage: multer.diskStorage({
//     filename: function (req, file, cb) {
//       // Kepp original filename
//       cb(null, file.originalname);
//     },
//     destination: function (req, file, cb) {
//       // Save file to subdir to avoid name conflicts
//       const dest = DIR + new Date().getTime();
//       fs.mkdir(dest);
//       cb(null, dest);
//     }
//   })
// });

/**
 * Information of uploaded file
 */
interface File extends Express.Multer.File {
  uploadDate: Date;
  user?: string;
}

/**
 * Store infomation of all the uploaded files
 * TODO: Use DB stoorage
 */
const files: { [key: string]: File } = {};

export { files };

export default Router()
  .post('/files', upload.single('file'), uploadFile)
  .get('/files', listFiles)
  .get('/files/:_filename', download)
  .delete('/files/:_filename', remove)
  .delete('/files', removeAll);

/**
 * Upload
 * @param req
 * @param res
 */
export function uploadFile(req: Request, res: Response) {
  const file = req.file as File;
  // Set upload date
  file.uploadDate = new Date();
  // Save file info
  files[file.filename] = file;
  // Send response
  res.end();
};

/**
 * List uploaded files
 * @param req
 * @param res
 */
export function listFiles(req: Request, res: Response) {
  const filesArray = [];
  Object.keys(files).forEach((flleName) => {
    filesArray.push(files[flleName]);
  });
  res.json(filesArray);
};

/**
 * Download file
 * @param req
 * @param res
 */
export function download(req: Request, res: Response) {
  const file = files[req.params._filename];
  res.setHeader('Content-Disposition', 'attachment; filename="' + file.originalname + '"');
  res.sendfile(file.path);
}

/**
 * Remove file
 * @param req
 * @param res
 */
export function remove(req: Request, res: Response) {
  const file = files[req.params._filename];
  // fs.unlink(file.path);
  delete files[req.params._filename];
  res.end();
}

/**
 * Remove all files
 * @param req
 * @param res
 */
export function removeAll(req: Request, res: Response) {
  // fs.unlink(DIR);
  Object.keys(files).forEach((flleName) => {
    delete files[flleName];
  });
  res.end();
}
