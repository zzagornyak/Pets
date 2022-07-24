// TODO no item found вместо блокировки кнопки, реверс сорт
import axios from "axios"
import cat from "../../images/cat/Cat03.jpg"
import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { css } from "styled-components"
import useDragAndDrop from "../../tools/useDragAndDrop"

import defaultImg from "../../images/close-button/closeDefault.svg"
import hoverImg from "../../images/close-button/closeHover.svg"

import errorImg from "../../images/upload-log/error.svg"
import okImg from "../../images/upload-log/ok.svg"

import uploadDefaultImg from "../../images/upload-photo/uploadDefault.svg"
import uploadHoverImg from "../../images/upload-photo/uploadHover.svg"
import uploadActiveImg from "../../images/upload-photo/uploadActive.svg"

import SvgButton from "../../shared-elements/svg-button/SvgButton"
import GalleryContent from "./GalleryContent"
import SearchBar from "../../shared-elements/search-bar/search-bar"
import uploadDefault from "../../images/upload-button/upload-default.svg"
import uploadHover from "../../images/upload-button/upload-hover.svg"
import StyledContentArea from "../../shared-elements/content-area/ContentArea.styled"
import StyledFlexBox from "../../shared-elements/flex-box/FlexBox.styled"
import StyledButtonBack from "../../shared-elements/button-back/ButtonBack.styled"
import StyledButton from "../../shared-elements/button/Button.styled"
// 
import UploadLoader from "../../shared-elements/upload-loader/UploadLoader"



const Gallery = () => {
    const [isUploadOpen, setUploadOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);



    return (


        (isUploadOpen && <ModalWindow
            setUploadOpen={setUploadOpen}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage} />
        ) ||
        <>
            <StyledFlexBox>
                <SearchBar />
                <StyledContentArea>
                    <StyledFlexBox
                        align="flex-start"
                        jc="space-between"
                        fd="row"
                        minHeigth="40px">
                        <StyledDiv>
                            <StyledButtonBack />
                            <StyledButton
                                noHover
                                isActive={true}
                                textContent="GALLERY"
                            />
                        </StyledDiv>
                        <SvgButton
                            onClick={() => {
                                setUploadOpen(true)
                            }}
                            defaultImg={uploadDefault}
                            hoverImg={uploadHover}
                            w={"143px"}

                        />

                    </StyledFlexBox>

                    <GalleryContent />
                </StyledContentArea>
            </StyledFlexBox>

        </>



    )
}

export default Gallery



const StyledDiv = styled.div`
display: flex;
align-items: center;

`
const Modal = styled.div`
position: absolute;
background: rgba(29, 29, 29, 0.6);
left: 0;
right: 0;
top: 0;
bottom: 0;

    
    
    h3 {
        margin-bottom: 40px;
        color: #8C8C8C;
        font-weight: 400;
        a {
            display: inline;
            color: #FF868E;
        }
    }
    section {
        
        position: absolute;
        right: 30px;
        top: 30px;
        bottom: 30px;
        left: 50%;
        background: ${({ theme }) => theme.grayLightBlack};
        
        border-radius: 20px;
        padding: 100px 20px 20px 20px;
        text-align: center;
        span {
            font-size: 20px;
            line-height: 30px;
            color: #8C8C8C;
        }
        
    }


`




const StyledLog = styled.div`
margin-top: 20px;
height: 60px;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
padding: 0 20px;
background: #FFFFFF;
border-radius: 10px;
img {
    margin-right: 10px;
}
span {
    font-size: 16px;
    line-height: 24px;

}
`

const ModalWindow = ({ selectedImage, setSelectedImage, setUploadOpen }) => {
    return (
        <Modal>
            <section>
                <UploadAndDisplayImage
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
                <div>
                    <SvgButton
                        defaultImg={defaultImg}
                        hoverImg={hoverImg}
                        pos="absolute"
                        r="20px"
                        t="20px"
                        w="40px"
                        h="40px"
                        themeStyle="whiteLightBlack"
                        onClick={() => {
                            setSelectedImage(null)
                            setUploadOpen(false)
                        }}
                    >
                    </SvgButton>
                </div>


            </section>


        </Modal>
    )
}

const UploadAndDisplayImage = ({ selectedImage, setSelectedImage }) => {
    const {
        dragOver,
        setDragOver,
        onDragOver,
        onDragLeave,
        fileDropError,
        setFileDropError,
        onDragEnter
    } = useDragAndDrop()



    const [isUploading, setUploading] = useState(false)
    const [isUploaded, setIsUploaded] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsUploaded(false)
        setUploading(false)
        setError(false)
    }, [])

    const onDrop = (e) => {
        setIsUploaded(false)
        e.preventDefault();

        setDragOver(false);

        const selectedFile = e.dataTransfer.files[0];


        setSelectedImage(selectedFile);
    };

    const handleSubmission = () => {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "x-api-key": "e4b7c068-7b42-4737-92e1-a6fd10af6685",
            }
        };

        let formData = new FormData()
        formData.append("file", selectedImage)

        axios.post("https://api.thecatapi.com/v1/images/upload", formData, config)
            .then(() => {
                setUploading(false)
                setSelectedImage(null)
                setUploading(false)
                setIsUploaded(true)
            })
            .catch((error) => {
                console.log("ошибка", error);
                setUploading(false)
                setError(true)

            })
    }



    return (
        <div>
            <h2>Upload a .jpg or .png Cat Image</h2>
            <h3>Any uploads must comply with the <a target="_blank" href="https://docs.thecatapi.com/image-upload">upload guidelines </a> or face deletion.</h3>

            <StyledWrapper
                error={error}
            >
                {/* Show selected image or file input  */}
                {
                    (
                        selectedImage &&

                        <img alt="cat" onClick={() => {
                            setSelectedImage(null)
                            setError(false)
                        }} src={URL.createObjectURL(selectedImage)} />
                    )

                    ||

                    <label
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop} >
                        <input
                            type="file"
                            name="myImage"

                            onChange={(event) => {
                                console.log("click")
                                setIsUploaded(false)
                                setSelectedImage(event.target.files[0]);
                            }}
                        />

                        <span><strong>Drag here</strong> your file or<strong> Click here</strong> to upload</span>

                        <svg width="200" height="200" viewBox="0 0 200 200"     xmlns="http://www.w3.org/2000/svg">
                            <path d="M140 40C128.954 40 120 48.9543 120 59.9999C120 71.0456 128.954 79.9999 140 79.9999C151.046 79.9999 160 71.0456 160 59.9999C160 48.9543 151.046 40 140 40Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C0 8.9543 8.9543 0 20 0H180C191.046 0 200 8.9543 200 20V180C200 181.38 199.86 182.729 199.594 184.031C199.199 185.958 198.528 187.784 197.623 189.465C194.247 195.737 187.621 200 180 200H20C8.95431 200 0 191.046 0 180V20ZM64.6564 41.8952L60 37.2387L13.3333 83.9054V20C13.3333 16.3181 16.3181 13.3333 20 13.3333H180C183.682 13.3333 186.667 16.3181 186.667 20V133.333H156.095L64.7145 41.9526C64.6953 41.9333 64.6759 41.9142 64.6564 41.8952Z" />
                        </svg>

                    </label>
                }
            </StyledWrapper>


            {
                /* Show selected image or not found message */
                (selectedImage &&
                    <div>
                        <span>Image File Name: {selectedImage.name}</span> <br />
                        {
                            !error &&
                            <SvgButton
                                onClick={() => {
                                    handleSubmission()
                                    setUploading(true)
                                }}
                                pos="relative"
                                w="172px"
                                h="40px"
                                mt="20px"
                                defaultImg={uploadDefaultImg}
                                hoverImg={uploadHoverImg}
                                activeImg={uploadActiveImg}
                                active={isUploading ? true : false}

                            />
                        }
                        {isUploading ? <UploadLoader /> : null}

                    </div>) || <span>No file selected</span>
            }


            {
                isUploaded &&
                <StyledLog>
                    <img src={okImg} alt="OK" />
                    <span>Thanks for the Upload - Cat found!</span>
                </StyledLog>
            }
            {
                error &&
                <StyledLog>
                    <img src={errorImg} alt="error" />
                    <span>No Cat found - try a different one</span>
                </StyledLog>
            }

        </div>
    );
};
const StyledWrapper = styled.div`
display: block;
height: 45vh;
background: ${({theme}) => theme.grayLightBlack};
border: 2px dashed #FBE0DC;
border-radius: 20px;
position: relative;
display: flex;
align-items: center;
justify-content: space-around;
padding: 40px 20px;
margin-bottom: 20px;


${props => props.error ? css`
    background-color: ${({theme}) => theme.pinkDarkPink}; 
    border-color: #FF868E;` : null};
    img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        
    }
    label {
        cursor: pointer;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        svg {
            height: 200px;
            width: 200px;
            fill: ${({theme}) => theme.grayLightBlack};
            
        }

    }
    span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;

    }
    strong {
        color: ${({theme}) => theme.blackWhite};
        font-weight: 500;
        
    }
    input {
        display: none;
    }
`