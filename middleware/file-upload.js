const multer = require('multer');

// CONFIG MULTER
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename : (req, file, cb) => {
        const date = new Date().toLocaleDateString();
        cb(null, date + "-" + Math.round(Math.random() * 10000) + "-" + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error("L'image n'est pas acceptée"), false)
    }
}

module.export = [storage, fileFilter]