/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const t = document.createElement(tag);
        t.innerHTML = content;
        document.body.append(t);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let rootDiv = document.createElement('div');
    rootDiv.setAttribute('class', 'item_1');

    for (let i = 1; i <= level; i++) {
        let parentDiv = document.createElement('div');
        parentDiv.setAttribute('class', 'item_2');
        for (let j = 1; j <= childrenCount; j++) {
            let childDiv = document.createElement('div');
            childDiv.setAttribute('class', 'item_3');
            parentDiv.appendChild(childDiv);
        }
        rootDiv.appendChild(parentDiv);
    }
    return rootDiv;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const tree = new generateTree(2, 3);
    const item_2 = tree.getElementsByClassName('item_2');

    for (let n of item_2) {
        const section = document.createElement('section');
        section.setAttribute('class', 'item_2');
        section.innerHTML = n.innerHTML;
        n.before(section);
        n.remove();
    }
    return tree;
}
