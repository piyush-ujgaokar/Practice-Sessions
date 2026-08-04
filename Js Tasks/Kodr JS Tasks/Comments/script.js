let commentInput = document.getElementById("commentInput");
let addBtn = document.getElementById("addBtn");
let commentsDiv = document.getElementById("comments");

let comments = [];
let id = 1;

addBtn.addEventListener("click", function () {

    if (commentInput.value == "") {
        return;
    }

    comments.push({
        id: id++,
        text: commentInput.value,
        replies: []
    });

    commentInput.value = "";

    showComments();

});

function showComments() {

    commentsDiv.innerHTML = "";

    comments.forEach(function (comment) {

        let box = document.createElement("div");
        box.className = "comment";

        box.innerHTML = `
            <p>${comment.text}</p>

            <button onclick="showReplyInput(${comment.id})">Reply</button>

            <div id="replyInput${comment.id}"></div>

            <div id="replyList${comment.id}"></div>
        `;

        commentsDiv.appendChild(box);

        let replyList = document.getElementById("replyList" + comment.id);

        comment.replies.forEach(function (reply) {

            replyList.innerHTML += `
                <div class="reply">
                    ${reply}
                </div>
            `;

        });

    });

}

function showReplyInput(id) {

    let div = document.getElementById("replyInput" + id);

    div.innerHTML = `
        <div class="replyBox">
            <input type="text" id="replyText${id}" placeholder="Write Reply">
            <button onclick="addReply(${id})">Add Reply</button>
        </div>
    `;

}

function addReply(id) {

    let input = document.getElementById("replyText" + id);

    if (input.value == "") {
        return;
    }

    comments.forEach(function (comment) {

        if (comment.id == id) {
            comment.replies.push(input.value);
        }

    });

    showComments();

}