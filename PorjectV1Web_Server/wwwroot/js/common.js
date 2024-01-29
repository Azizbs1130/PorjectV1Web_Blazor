﻿/*Here we add a method to window so we can call it in blazor like any existing method*/

window.ShowToastr = (type, message) => {
    if (type === "success") {
        toastr.success(message, 'Operation Successful', { timeOut: 5000 })
    }

    if (type === "error") {
        toastr.error(message, 'Operation Failed', { timeOut: 5000 })
    }
}

window.ShowSweetAlert = (type, message) => {
    if (type === "success") {
        Swal.fire({
            title: "Success Notification!",
            text:  message,
            icon: "success"
        });
    }

    if (type === "error") {
        Swal.fire({
            title: "Error Notification!",
            text: message,
            icon: "error"
        });
    }
}