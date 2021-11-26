import { Module } from "@nestjs/common";
import { TrackModule } from './track/track.module';
import  { FileModule } from './file/file.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
    MongooseModule.forRoot('mongodb+srv://alec:harley77@cluster0.ko5yx.mongodb.net/music-app?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})


export class AppModule {

}