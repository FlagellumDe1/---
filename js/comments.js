let feedbackList = document.querySelector('.feedback__inner');

async function getFeedback(){
    let url = 'https://jsonplaceholder.typicode.com/comments';
    let response = await fetch(url);
    let responseJSON = await response.json(); 
    
    for (i=0; i<10; i++){
        let feedback = responseJSON[i];
        let feedbackAuthorName = feedback.email;
        let feedbackBodyText = feedback.body;
        let feedbackContractNumber = feedback.id;

        let feedbackCard = document.createElement('div');
        feedbackCard.classList.add('feedback__card');
        feedbackCard.classList.add('swiper-slide');
        feedbackList.append(feedbackCard);

        let feedbackHead = document.createElement('div');
        feedbackHead.classList.add('feedback__head')
        feedbackCard.append(feedbackHead);

        let feedbackAuthor = document.createElement('span');
        feedbackAuthor.classList.add('feedback__author');
        feedbackHead.append(feedbackAuthor);
        feedbackAuthor.innerHTML = feedbackAuthorName;

        feedbackContract = document.createElement('span');
        feedbackContract.classList.add('feedback__contract');
        feedbackHead.append(feedbackContract);
        feedbackContract.innerHTML = `Номер договора: ${feedbackContractNumber}`;

        let feedbackBody = document.createElement('div');
        feedbackBody.classList.add('feedback__body');
        feedbackCard.append(feedbackBody);
        feedbackBody.innerHTML = feedbackBodyText;
    }
}

getFeedback()