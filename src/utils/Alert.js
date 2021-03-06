import Swal from 'sweetalert2';

export default class Alert {
    static success = (message, onClose=null) => {
        Swal.fire({
            // title: 'Success!',
            text: message,
            animation: 'false',
            onClose: onClose
        })
    }

    static error = (message) => {
        Swal.fire({
            title: 'Error',
            type: 'error',
            text: message,
            animation: 'false'
        })
    }

    static confirm = (message) => {
        return Swal.fire({
            title: 'Confirm',
            text: message,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'OK',
            cancelButtonText: "Cancel",
            animation: 'false'
        })
    }
}