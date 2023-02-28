import React from "react";
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

export default function Upload(): JSX.Element {


    const [video, setVideo] = React.useState<string>()
    const [imageFile, setImageFile] = React.useState<File>()
    const [soundFile, setSoundFile] = React.useState<File>()

    const ffmpeg = createFFmpeg({
        log: true
    })
    async function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files as FileList;
        const file = fileList[0];
        setSoundFile(file);

    }

    async function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files as FileList;
        const file = fileList[0];
        setImageFile(file);
    }

    async function convertToVideo() {
        await ffmpeg.load();
       ffmpeg.FS('writeFile', 'sound.mp3', await fetchFile(soundFile as File));
       await ffmpeg.run("-y", "-i", "sound.mp3", "-c:a", "libmp3lame", "-b:a", "96k", "-muxdelay", "0", "-f", "segment",
       "-sc_threshold", "0", "-hls_time", "10", "-segment_list", "playlist_sound.m3u8",
       "-segment_format", "-hls_segment_filename", "test%03d.ts");
    }

   

    return (
        <>
            <input
                type="file"
                accept="audio/*"
                onChange={onFileChange}
            />
            <br />
            <br />
            <button onClick={convertToVideo}>Bungle</button>
        </>
    );

}
