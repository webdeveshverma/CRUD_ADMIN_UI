import { Button } from "@mui/material";
import{ VscCloseAll} from "react-icons/vsc"

 export const DialogBox = ({onDialog,username,ondelete}) => {
    return (
        
        <div
            style={{
                position: "fixed",
                top: "10%",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(0,0,0,0.5)"
            }}
             
        >

            <div className="dialog_div"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-aroun",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    background: "white",
                    padding: "20px",
                    borderRadius: "10px"
                }}

            >
                <div style={{ width:"8%",marginTop:"-5%",marginLeft:"100%"}}  onClick={() => onDialog(true)}    ><VscCloseAll style={{color:"Red",fontSize:"30px",cursor:"pointer"}}/></div>
                <h3 stlye={{ color: "#111", fontSize: "16px" }}>Are you want to sure {username} delete  ?</h3>
                
                <div style={{display:"flex",marginRight:"10px", justifyContent:"space-around",width:"50%"}}>
                    <Button
                      variant="contained" 
                        onClick={() => ondelete(true) || onDialog(false)}
                        >
                            Yes
                    </Button>
                    <Button
                        onClick={() => onDialog(false)}
                        variant="contained"
                        color="error" 
                    >
                        No
                    </Button>
                </div>
            </div>
        </div>
    );
}
