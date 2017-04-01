import { Express, Router, Request, Response } from 'express';
import * as multer from 'multer';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';

// Create an S3 client
const s3 = new AWS.S3();
const bucketName = 'cj-wang-mean-start-upload-file';

// Setup multer with multerS3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucketName,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

/**
 * Store infomation of all the uploaded files
 * TODO: Use DB stoorage
 */
const files: { [key: string]: Express.Multer.File } = {};

export { files };

export default Router()
  .post('/upload-file', upload.single('file'), uploadFile)
  .get('/upload-file', listFiles)
  .delete('/upload-file/:_filename', remove)
  .delete('/upload-file', removeAll);

/**
 * Upload
 * @param req
 * @param res
 */
export function uploadFile(req: Request, res: Response) {
  const file = req.file;
  // Set upload date
  file['uploadDate'] = new Date();
  // Save file info
  files[file.originalname] = file;
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
  Object.keys(files).forEach((filename) => {
    filesArray.push(files[filename]);
  });
  res.json(filesArray);
};

/**
 * Remove file
 * @param req
 * @param res
 */
export function remove(req: Request, res: Response) {
  const file = files[req.params._filename];
  delete files[req.params._filename];
  res.end();
}

/**
 * Remove all files
 * @param req
 * @param res
 */
export function removeAll(req: Request, res: Response) {
  Object.keys(files).forEach((filename) => {
    delete files[filename];
  });
  res.end();
}
