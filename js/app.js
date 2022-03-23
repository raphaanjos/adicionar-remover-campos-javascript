// fonte:
// Cesar Celke

// controla campos já inserido
let controlField = 1;

// adiciona campos
function addField() {
    controlField++;
    let elemHtml = `<div class="form-group" id="campo${controlField}"><span id="msgAlert${controlField}"></span>
    <label>CPF: </label><input type="text" name="cpf${controlField}" id="cpf${controlField}" onkeyup="pesquisarUsuario(${controlField})"
    placeholder="Somente números" /><label>Nome: </label><input type="text" name="nome${controlField}" id="nome${controlField}" placeholder="Nome do usuário" />
    <label>E-mail: </label><input type="text" name="email${controlField}" id="email${controlField}" placeholder="E-mail do usuário" />
    <input type="hidden" name="id${controlField}" id="id${controlField}" /><button type="button" id="btn-remove" id="${controlField}" onclick="removeField(${controlField})"> - </button></div>`;
    
    document.getElementById('form-content').insertAdjacentHTML("beforeend", elemHtml);
    document.getElementById('qnt_campo').value = controlField;
}

// remove campos
function removeField(idField) {
    document.getElementById(`campo${idField}`).remove();
}