document.body.oncopy = function(){
    if (window.getSelection) {
        selection = window.getSelection();
        if (selection != null) {
            selhtml = selection.toString()
        }
    } else if (document.selection) {
        selection = document.selection.createRange();
        if (selection != null) {
            selhtml = selection.text
        }
    }else {
        return true
    }
}