import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';

import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import multerConfig from '../nest/s3/s3.config';

@Controller()
export class S3Controller {
  @Post('file')
  @UseInterceptors(FileInterceptor('files', multerConfig))
  uploadAfiles(@UploadedFile() file: Express.MulterS3.File) {
    console.log('File saved successfully', file);
  }

  @Post('files')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'files' }], multerConfig))
  async uploadMultipleFiles(
    @UploadedFiles()
    files: Express.MulterS3.File[],
  ) {
    console.log('File saved successfully', files['files']);
  }
}
