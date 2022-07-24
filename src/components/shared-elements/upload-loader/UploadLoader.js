import styled from "styled-components";

const UploadLoader = () => {
  return (
    <Loader>
        <div className="loadingio-spinner-rolling-8hcz3suy3ft"><div className="ldio-l67qts5gpsb">
        <div></div>
        </div></div>

    </Loader>
  )
}

export default UploadLoader

const Loader = styled.div`
@keyframes ldio-l67qts5gpsb {
  0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }
}
.ldio-l67qts5gpsb div {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 10px solid #411518;
  border-top-color: transparent;
  border-radius: 50%;
}
.ldio-l67qts5gpsb div {
  animation: ldio-l67qts5gpsb 1s linear infinite;
  top: 50px;
  left: 50px
}
.loadingio-spinner-rolling-8hcz3suy3ft {
  width: 15px;
  height: 15px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-l67qts5gpsb {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.15);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-l67qts5gpsb div { box-sizing: content-box; }
`


