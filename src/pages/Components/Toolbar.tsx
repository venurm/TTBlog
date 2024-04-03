import React, { useContext } from "react";
import { CanvasContext } from "../CanvasContainer";

export const sizeList = [
  "8px",
  "9px",
  "10px",
  "11px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "72px"
];

export const fontList = [
  "Arial",
  "Arial Black",
  "Arial Unicode MS",
  "Calibri",
  "Cambria",
  "Cambria Math",
  "Candara",
  `Segoe UI, wf_segoe-ui_normal, helvetica, arial, sans-serif`,
  "Comic Sans MS",
  "Consolas",
  "Constantia",
  "Corbel",
  "Courier New",
  "Georgia",
  "Lucida Sans Unicode",
  "Tahoma",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana"
];

interface IToolbarProps {
  isEditEnable: boolean;
}

export default function Toolbar({ isEditEnable }: IToolbarProps) {
  const { actions } = useContext(CanvasContext);
  const addElement = (type: string) => {
    actions?.addElement(type);
  };
  return (
    <div style={{ display: "flex" }}>
     
      {/* <div className="toolbar-item" onClick={() => addElement("TEXT")}>
        T
      </div>
      <div className="toolbar-item" onClick={() => addElement("IMAGE")}>
        I
      </div> */}
       <div>
          <div className="flex items-center" style={{ padding: "20px"}}>
            <table style={{ padding: "20px", border: "1px solid gray", fontSize: "small" }}>
              <tr style={{ padding: "10px", border: "1px solid gray" }}>
                <td style={{ padding: "10px", border: "1px solid gray" }}>
                <center>
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 0C11.4477 0 11 0.447715 11 1V3C11 3.55228 11.4477 4 12 4C12.5523 4 13 3.55228 13 3V1C13 0.447715 12.5523 0 12 0Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM9.21518 14.7848C8.50248 14.0721 8.06167 13.0875 8.06167 12C8.06167 9.82492 9.82492 8.06167 12 8.06167C13.0875 8.06167 14.0721 8.50248 14.7848 9.21518L9.21518 14.7848Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M19.0711 3.51472C19.4616 3.12419 20.0947 3.12419 20.4853 3.51472C20.8758 3.90524 20.8758 4.53841 20.4853 4.92893L19.0711 6.34315C18.6805 6.73367 18.0474 6.73367 17.6568 6.34315C17.2663 5.95262 17.2663 5.31946 17.6568 4.92893L19.0711 3.51472Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M0 12C0 12.5523 0.447715 13 1 13H3C3.55228 13 4 12.5523 4 12C4 11.4477 3.55228 11 3 11H1C0.447715 11 0 11.4477 0 12Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M3.51472 4.92893C3.1242 4.53841 3.1242 3.90524 3.51472 3.51472C3.90525 3.12419 4.53841 3.12419 4.92894 3.51472L6.34315 4.92893C6.73368 5.31946 6.73368 5.95262 6.34315 6.34314C5.95263 6.73367 5.31946 6.73367 4.92894 6.34314L3.51472 4.92893Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M12 20C11.4477 20 11 20.4477 11 21V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V21C13 20.4477 12.5523 20 12 20Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M4.92894 17.6569C5.31946 17.2663 5.95263 17.2663 6.34315 17.6569C6.73368 18.0474 6.73368 18.6805 6.34315 19.0711L4.92894 20.4853C4.53842 20.8758 3.90525 20.8758 3.51473 20.4853C3.1242 20.0948 3.1242 19.4616 3.51473 19.0711L4.92894 17.6569Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M20 12C20 12.5523 20.4477 13 21 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H21C20.4477 11 20 11.4477 20 12Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M17.6568 19.0711C17.2663 18.6805 17.2663 18.0474 17.6568 17.6569C18.0474 17.2663 18.6805 17.2663 19.0711 17.6569L20.4853 19.0711C20.8758 19.4616 20.8758 20.0948 20.4853 20.4853C20.0947 20.8758 19.4616 20.8758 19.0711 20.4853L17.6568 19.0711Z"
                        fill="#0F0F0F"
                      />{" "}
                    </g>
                  </svg>
                  Brightness
                  </center>
                </td>
              </tr>
              <tr style={{ padding: "10px", border: "1px solid gray" }}>
                <td style={{ padding: "10px", border: "1px solid gray" }}>
                <center>
                  <svg
                    fill="#000000"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    version="1.1"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>contrast</title>{" "}
                      <path d="M0 16q0 3.264 1.28 6.24t3.392 5.088 5.12 3.424 6.208 1.248q3.264 0 6.24-1.248t5.088-3.424 3.392-5.088 1.28-6.24-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048zM16 26.016q2.72 0 5.024-1.344t3.648-3.648 1.344-5.024-1.344-4.992-3.648-3.648-5.024-1.344v20z" />{" "}
                    </g>
                  </svg>
                  Contrast
                  </center>
                </td>
              </tr>
              <tr style={{ padding: "10px", border: "1px solid gray" }}>
                <td style={{ padding: "10px", border: "1px solid gray", cursor: "pointer" }} onClick={() => addElement("IMAGE")}>
                <center>
                <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1"  fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set"  transform="translate(-360.000000, -99.000000)" fill="#000000"> <path d="M368,109 C366.896,109 366,108.104 366,107 C366,105.896 366.896,105 368,105 C369.104,105 370,105.896 370,107 C370,108.104 369.104,109 368,109 L368,109 Z M368,103 C365.791,103 364,104.791 364,107 C364,109.209 365.791,111 368,111 C370.209,111 372,109.209 372,107 C372,104.791 370.209,103 368,103 L368,103 Z M390,116.128 L384,110 L374.059,120.111 L370,116 L362,123.337 L362,103 C362,101.896 362.896,101 364,101 L388,101 C389.104,101 390,101.896 390,103 L390,116.128 L390,116.128 Z M390,127 C390,128.104 389.104,129 388,129 L382.832,129 L375.464,121.535 L384,112.999 L390,118.999 L390,127 L390,127 Z M364,129 C362.896,129 362,128.104 362,127 L362,126.061 L369.945,118.945 L380.001,129 L364,129 L364,129 Z M388,99 L364,99 C361.791,99 360,100.791 360,103 L360,127 C360,129.209 361.791,131 364,131 L388,131 C390.209,131 392,129.209 392,127 L392,103 C392,100.791 390.209,99 388,99 L388,99 Z" id="image-picture" > </path> </g> </g> </g>

</svg>
                  Image
                  </center>
                </td>
              </tr>
              <tr style={{ padding: "10px", border: "1px solid gray" }}>
                <td style={{ padding: "10px", border: "1px solid gray", cursor: "pointer" }}
                  onClick={() => addElement("TEXT")}>
                  <center>
                    <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 3V21M9 21H15M19 6V3H5V6"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                  Text
                  </center>
                </td>
              </tr>
              <tr style={{ padding: "10px", border: "1px solid gray" }}>
                <td style={{ padding: "10px", border: "1px solid gray" }}>
                <center>
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M14 12.5001C14 13.3285 13.3284 14.0001 12.5 14.0001C11.6716 14.0001 11 13.3285 11 12.5001C11 11.6717 11.6716 11.0001 12.5 11.0001C13.3284 11.0001 14 11.6717 14 12.5001Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M16.5 10.0001C17.3284 10.0001 18 9.32854 18 8.50011C18 7.67169 17.3284 7.00011 16.5 7.00011C15.6716 7.00011 15 7.67169 15 8.50011C15 9.32854 15.6716 10.0001 16.5 10.0001Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M13 6.50011C13 7.32854 12.3284 8.00011 11.5 8.00011C10.6716 8.00011 10 7.32854 10 6.50011C10 5.67169 10.6716 5.00011 11.5 5.00011C12.3284 5.00011 13 5.67169 13 6.50011Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M7.50001 12.0001C8.32844 12.0001 9.00001 11.3285 9.00001 10.5001C9.00001 9.67169 8.32844 9.00011 7.50001 9.00011C6.67158 9.00011 6.00001 9.67169 6.00001 10.5001C6.00001 11.3285 6.67158 12.0001 7.50001 12.0001Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M14 17.5001C14 18.3285 13.3284 19.0001 12.5 19.0001C11.6716 19.0001 11 18.3285 11 17.5001C11 16.6717 11.6716 16.0001 12.5 16.0001C13.3284 16.0001 14 16.6717 14 17.5001Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        d="M7.50001 17.0001C8.32844 17.0001 9.00001 16.3285 9.00001 15.5001C9.00001 14.6717 8.32844 14.0001 7.50001 14.0001C6.67158 14.0001 6.00001 14.6717 6.00001 15.5001C6.00001 16.3285 6.67158 17.0001 7.50001 17.0001Z"
                        fill="#0F0F0F"
                      />{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5017 1.02215C15.4049 0.791746 19.5636 2.32444 21.8087 5.41131C22.5084 6.37324 22.8228 7.63628 22.6489 8.83154C22.471 10.054 21.7734 11.2315 20.4472 11.8945C19.6389 12.2987 18.7731 12.9466 18.2401 13.668C17.7158 14.3778 17.6139 14.9917 17.8944 15.5529C18.4231 16.6102 18.8894 17.9257 18.8106 19.1875C18.7699 19.8375 18.5828 20.4946 18.1664 21.0799C17.7488 21.6667 17.1448 22.1192 16.3714 22.4286C14.6095 23.1333 12.6279 23.1643 10.8081 22.8207C8.98579 22.4765 7.24486 21.7421 5.92656 20.8194C4.00568 19.4748 2.47455 17.6889 1.71371 15.4464C0.9504 13.1965 0.995912 10.5851 2.06024 7.65803C3.64355 3.30372 7.56248 1.25469 11.5017 1.02215ZM11.6196 3.01868C8.26589 3.21665 5.18483 4.9176 3.93984 8.34149C3.00414 10.9148 3.01388 13.0536 3.60768 14.8038C4.20395 16.5613 5.42282 18.0255 7.07347 19.1809C8.14405 19.9303 9.6169 20.5604 11.1792 20.8554C12.7442 21.151 14.3181 21.0959 15.6286 20.5716C16.308 20.2999 16.7678 19.8099 16.8145 19.0627C16.8606 18.3245 16.5769 17.3901 16.1056 16.4473C15.3639 14.9639 15.8542 13.5318 16.6315 12.4796C17.4002 11.4391 18.5455 10.6093 19.5528 10.1057C20.2266 9.76878 20.5747 9.19623 20.6697 8.54355C20.7686 7.86365 20.5831 7.12638 20.1913 6.58769C18.4364 4.17486 15.0093 2.81858 11.6196 3.01868Z"
                        fill="#0F0F0F"
                      />{" "}
                    </g>
                  </svg>
                  Color
                  </center>
                </td>
              </tr>
            </table>
          </div>
       </div>
       
       {isEditEnable && (
        <div id="toolbar" style={{ paddingTop: "20px"}}>
          <table style={{ padding: "10px", border: "1px solid gray" }}>
            <tr style={{ padding: "10px", border: "1px solid gray" }}> 
              <td style={{ padding: "10px", border: "1px solid gray" }}>
                <select className="ql-font">
              {fontList.map((font) => (
                <option value={font}>{font}</option>
              ))}
            </select>
            </td>
            </tr>
            <tr style={{ padding: "10px", border: "1px solid gray" }}> 
              <td style={{ padding: "10px", border: "1px solid gray" }}>
              <select className="ql-size">
            {sizeList.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
            </td>
            </tr>
            <tr style={{ padding: "10px", border: "1px solid gray" }}> 
              <td style={{ padding: "10px", border: "1px solid gray" }}>
              <button className="ql-bold" />
            </td>
            </tr>
            <tr style={{ padding: "10px", border: "1px solid gray" }}> 
              <td style={{ padding: "10px", border: "1px solid gray" }}>
              <button className="ql-italic" />
            </td>
            </tr>
            <tr style={{ padding: "10px", border: "1px solid gray" }}> 
              <td style={{ padding: "10px", border: "1px solid gray" }}>
              <button className="ql-underline" /> 
            </td>
            </tr>
          
            <tr style={{ padding: "10px", border: "1px solid gray" }}> 
              <td style={{ padding: "10px", border: "1px solid gray" }}>
              <select className="ql-color" />
            </td>
            </tr>
            <tr style={{ padding: "10px", border: "1px solid gray" }}> 
              <td style={{ padding: "10px", border: "1px solid gray" }}>
              <select className="ql-background" />
            </td>
            </tr>
          </table>
         
         
         
          
           {/* <select className="ql-align" />  */}
          
          
        </div>
      )}
    </div>
    // <div className="toolbar-container">
    //   {/* <div className="toolbar-item" onClick={() => addElement("TEXT")}>
    //     T
    //   </div> */}
    //   {/* <div className="toolbar-item">Size</div>
    //   <div className="toolbar-item">B</div>
    //   <div className="toolbar-item">I</div>
    //   <div className="toolbar-item">U</div> */}
    //   <select
    //     className="ql-header"
    //     defaultValue={""}
    //     onChange={(e) => e.persist()}
    //   >
    //     <option value="1"></option>
    //     <option value="2"></option>
    //     <option selected></option>
    //   </select>
    //   <button className="ql-bold"></button>
    //   <button className="ql-italic"></button>
    //   <select className="ql-color">
    //     <option value="red"></option>
    //     <option value="green"></option>
    //     <option value="blue"></option>
    //     <option value="orange"></option>
    //     <option value="violet"></option>
    //     <option value="#d0d1d2"></option>
    //     <option selected></option>
    //   </select>
    // </div>
  );
}
