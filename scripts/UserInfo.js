

class UserInfo{
    constructor({nameSelector,jobSelector}){
        this._elementName = document.querySelector(nameSelector);
        this._elementJob = document.querySelector(jobSelector);
    }
    
    getUserInfo(){
//pega os dados que já existem e exibe (LÊ)
         return {
            nome: this._elementName.textContent,
            job: this._elementJob.textContent,
        };
    }
    setUserInfo({name,job}){
//insere novos dados e adiciona na página (ESCREVE)
        this._elementName.textContent = name
        this._elementJob.textContent = job
    }



}


export {UserInfo};