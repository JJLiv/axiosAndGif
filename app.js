// console.log("Let's get this party started!");

$(function(){
    const $form = $('#form');
    const $input = $('#input');
    const $remove = $('#remove');
    const $gifContainer = $('#gif-container');


    function showGif(result){
        if(result.data.length){
        let random = Math.floor(Math.random() * result.data.length);
        let $newDiv = $('<div>');
        let $newGif = $('<img>',{
            src: result.data[random].images.original.url,
        });
        $newDiv.append($newGif);
        $gifContainer.append($newDiv);
    }
    }

    $form.on('submit', async function(evt){
        evt.preventDefault();
        let searchTerm = $input.val();
        $input.val("");
        let result = await axios.get('http://api.giphy.com/v1/gifs/search',{
            params: {
                q: searchTerm,
                api_key: 'Ygu9JR1fOSHB0ZHcLkELd7j23FFefzSV',
            }
        });
        showGif(result.data);
    });
    
    $remove.on('click', function(evt){
        evt.preventDefault();
        $gifContainer.empty();
    });
});



















// API Key: Ygu9JR1fOSHB0ZHcLkELd7j23FFefzSV