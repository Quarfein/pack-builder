const fs = require('fs');
const AdmZip = require("adm-zip");

fs.watch('./modpack_input', { recursive: true }, async (eventType, rawFilename) => {
    if ((rawFilename && rawFilename.endsWith('.mrpack')) && fs.existsSync('./modpack_input/' + rawFilename)) {
        let filename = rawFilename.split('.mrpack');
        await fs.copyFileSync('./modpack_input/' + rawFilename, './works/' + filename[0] + '.zip', fs.constants.COPYFILE_FICLONE_FORCE);
        await fs.copyFileSync('./modpack_input/' + rawFilename, './modpack_output/' + rawFilename, fs.constants.COPYFILE_FICLONE_FORCE);
        fs.rmSync('./modpack_input/' + rawFilename);

        try {
            const zip = new AdmZip('./works/' + filename[0] + '.zip');
            zip.extractAllTo('./works/', true);
            fs.rmSync('./works/' + filename[0] + '.zip');
            console.log(`Extraction dans /works`);
        } catch (e) {
            console.error("Erreur :", e);
        }

        console.log(`Nouveau pack : ${filename}`);
    }
});