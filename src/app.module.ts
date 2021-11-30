import { Module } from "@nestjs/common";
import { TrackModule } from './track/track.module';
import  { FileModule } from './file/file.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';

@Module({
    imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),}),
    MongooseModule.forRoot('mongodb+srv://alec:harley77@cluster0.ko5yx.mongodb.net/music-app?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})


export class AppModule {

}