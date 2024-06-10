import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Footer from './Footer';
import './UploadPattern.css';

function UploadPattern() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [generatedImages, setGeneratedImages] = useState([]);
    const [patternGenerated, setPatternGenerated] = useState(false);
    const [zoomedImage, setZoomedImage] = useState(null);
    const [numSamplesToShow, setNumSamplesToShow] = useState(4); // Default value

    const onDrop = (acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile.size > 10 * 1024 * 1024) { // 10 MB size limit
            setError('File size exceeds 10 MB');
        } else {
            setFile(selectedFile);
            setError(null);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const widthHalf = img.width / 2;
                    const heightHalf = img.height / 2;
                    const images = [
                        { x: 0, y: 0, width: widthHalf, height: heightHalf },
                        { x: widthHalf, y: 0, width: widthHalf, height: heightHalf },
                        { x: 0, y: heightHalf, width: widthHalf, height: heightHalf },
                        { x: widthHalf, y: heightHalf, width: widthHalf, height: heightHalf }
                    ].map(({ x, y, width, height }) => {
                        const imageData = ctx.getImageData(x, y, width, height);
                        const tempCanvas = document.createElement('canvas');
                        tempCanvas.width = width;
                        tempCanvas.height = height;
                        const tempCtx = tempCanvas.getContext('2d');
                        tempCtx.putImageData(imageData, 0, 0);
                        const tempImg = new Image();
                        tempImg.src = tempCanvas.toDataURL();
                        return tempImg;
                    });
                    setGeneratedImages(images);
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }, [file]);

    const handleGeneratePattern = () => {
        setPatternGenerated(true);
        // Additional processing logic can be added here if needed
    };

    const handleImageClick = (image) => {
        setZoomedImage(image);
    };

    const handleCloseZoomedImage = () => {
        setZoomedImage(null);
    };

    const handleDownloadImage = (image) => {
        const link = document.createElement('a');
        link.href = image.src;
        link.download = `generated_image_${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleNumSamplesChange = (event) => {
        setNumSamplesToShow(parseInt(event.target.value));
    };

    return (
        <div className="upload-container">
            <div className='logo1'>
                <h1>V-Designers</h1>
            </div>
            <div className="upload-container1">
                <div {...getRootProps()} className="button">
                    <input {...getInputProps()} />
                    {isDragActive ? 'Drop the files here ...' : 'Upload Pattern'}
                </div>
                {file && <p>File selected: {file.name}</p>}
                {error && <p className="error">{error}</p>}
                {patternGenerated && (
                    <div className="generated-images-container">
                        {generatedImages.slice(0, numSamplesToShow).map((image, index) => (
                            <div key={index} className="generated-image-wrapper">
                                <img
                                    src={image.src}
                                    alt={`Generated Image ${index}`}
                                    onClick={() => handleImageClick(image)}
                                />
                                <div className="image-options">
                                    <button className='button' onClick={() => handleDownloadImage(image)}>Download</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {zoomedImage && (
                    <div  className="zoomed-image-container">
                        <img  src={zoomedImage.src} alt="Zoomed Image" />
                        <div className="close-icon" onClick={handleCloseZoomedImage} >X</div>
                    </div>
                )}
                {file && !patternGenerated && (
                    <>
                        <div className="select-num-samples">
                            <label>Select number of samples to show:</label>
                            <select value={numSamplesToShow} onChange={handleNumSamplesChange}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                        <button className="button" onClick={handleGeneratePattern}>
                            Generate Pattern
                        </button>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default UploadPattern;
