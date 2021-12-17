import { Alert } from "react-bootstrap";

 
 export  default function PreviewContent()   {
    return (
        <div>
            <Alert variant="danger">
            <Alert.Link href="/api/exit-preview">Leave preview mode</Alert.Link>
            </Alert>
        </div>
    )
}
