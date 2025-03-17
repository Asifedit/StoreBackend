const multer = require("multer");
const path = require("path");

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10000);
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public"));
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const randomNum = generateRandomNumber();
        const fileExtension = path.extname(file.originalname);
        cb(null, `PDFStore_${timestamp}_${randomNum}${fileExtension}`);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 30 * 1024 * 1024 },
});

module.exports = upload;
