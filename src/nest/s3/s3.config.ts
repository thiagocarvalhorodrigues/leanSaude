import * as multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();
const s3Config = new S3Client({
  region: config.get('REGION'),
  credentials: {
    accessKeyId: config.get('ACCESSKEYID'),
    secretAccessKey: config.get('SECRETACCESSKEY'),
  },
});

const multerConfig = {
  storage: multerS3({
    s3: s3Config,
    bucket: config.get('BUCKET'),
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: config.get('ACL'),
    key: (req, file, cb) => {
      const fileName =
        path.parse(file.originalname).name.replace(/\s/g, '') + '-' + uuidv4();

      const extension = path.parse(file.originalname).ext;
      cb(null, `${fileName}${extension}`);
    },
  }),
};

export default multerConfig;
