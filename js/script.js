todo = {
    input : document.getElementById('inputTodo'),
    create : document.getElementById('create'),
    list : document.getElementById('todoList'),
    checkBox : document.querySelectorAll('input[type="checkbox"]'),
    editBtn : document.querySelectorAll('#todoList>li>button'),

    init : function(){
        this._btnClick();
        this._checked();
        this._delete();
    },
    _btnClick : function(){
        this.create.addEventListener('click', function(){
            todo._addList();
        });
        
    },
    _addList : function(){
        const todoText = this.input.value,
            li = document.createElement('li');
        if(todoText == ''){
            alert('내용을 입력해 주세요!!!!');
            return false;
        }else{
            li.innerHTML = `<label><input type="checkbox" id="checkBox">${todoText}</label><button>수정</button>`;
            this.list.append(li);
            todo._edit();
            todo.input.value = '';
        };
    //###수정 : 리스트 추가될때도 _checked 함수 적용되게????
    todo._checked();

    },
    _checked : function(){
        //querySelectorAll 선택자로 선택된 모든 엘리먼트에 클릭 이벤트 적용
        for(let i = 0; i < this.checkBox.length; i++){
            todo._edit();
            todo.checkBox[i].addEventListener('click',function(){
                if(todo.checkBox.item(i).type == "checkbox" && todo.checkBox.item(i).checked){
                    document.querySelectorAll('#todoList > li').item(i).style.textDecoration = "line-through";
                }else{
                    document.querySelectorAll('#todoList > li').item(i).style.textDecoration = "none";
                }
            });
        };
    },
    _edit : function(){
        for(let j =0; j < this.editBtn.length; j++){

            todo.editBtn[j].addEventListener('click',function(){
                const editMessage = prompt('수정할 내용을 입력해주세요');
                if(editMessage == null && editMessage == ''){
                    alert('입력된 내용이 없습니다.');
                    return false;
                }else{
                    todo.list.children[j].innerHTML = `<li><label><input type="checkbox" id="checkBox">${editMessage}</label><button>수정</button></li>`
                }
            });
        };
    },
    _delete : function(){
        const delAllBtn = document.getElementById('deleteAll');
        delAllBtn.addEventListener('click',function(){
            while(todo.list.firstChild){
                todo.list.removeChild(todo.list.firstChild);
            };
        });
    }
};
todo.init();
