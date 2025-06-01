//your JS code here. If required.
 const list=document.getElementById("book-list")
        function addBook(event)
        {
            
            event.preventDefault();
            
                if(title.value=="" || author.value=="" || isbn.value=="")
                {
                    alert("Enter all data");
                    return;
                }
            list.innerHTML+=`<tr>
                <td>${title.value}</td>
                <td>${author.value}</td>
                <td>${isbn.value}</td>
                <td><button onclick="delBook(this)" class="delete">x</button></td>
                </tr>`;
                
                title.value="";
                author.value="";
                isbn.value="";
            
        }
        function delBook(button)
        {
           const del= button.parentElement.parentElement;
           del.remove();
        }