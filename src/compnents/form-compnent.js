import { TextField, Button, InputLabel } from "@mui/material"

export function FormCompnent() {
    return <div className="form-wrapper">
        <h1 className="heading">Speak to one of our experts</h1>
        <div className="form-group">
            <div className="wrap-row"><InputLabel htmlFor="name">Name</InputLabel ><span className="txt-daner">*</span></div>
            <TextField id="name" placeholder="Enter Name" variant="outlined" size="small" className="form-control" />
        </div>
        <div className="form-group">
            <div className="wrap-row"><InputLabel htmlFor="orgname">Organization Name</InputLabel><span className="txt-daner">*</span></div>
            <TextField id="orgname" placeholder="Enter Organization Name" variant="outlined" size="small" />
        </div>
        <div className="wrap-row">
            <div className="form-group">
                <div className="wrap-row"><InputLabel htmlFor="workemail">Work Email</InputLabel><span className="txt-daner">*</span></div>
                <TextField id="workemail" placeholder="demo@incubxperts.com" variant="outlined" size="small" />
            </div>
            <div className="form-group">
                <div className="wrap-row"><InputLabel htmlFor="phoneno">Phone Number</InputLabel><span className="txt-daner">*</span></div>
                <TextField id="phoneno" placeholder="Number (including code)" variant="outlined" size="small" />
            </div>
        </div>
        <div className="form-group">
            <InputLabel htmlFor="msg">Message</InputLabel>
            <TextField
                id="msg"
                placeholder="Write a message"
                size="small"
                multiline
                rows={4}
                variant="outlined"
            />
        </div>
        <div className="form-group">
            <Button variant="contained" className="btn-primary">Submit</Button>
        </div>
    </div>
}