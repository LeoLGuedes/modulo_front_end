    $(document).ready(function (){

        $('form').on('submit', function(e){
            e.preventDefault()

            const name = $('#name').val()
            const email = $('#email').val()
            const tel = $('#tel').val()

            const novoCad = $(`<tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${tel}</td>
            </tr>`)

            novoCad.appendTo('tbody')
        })  
        




    })