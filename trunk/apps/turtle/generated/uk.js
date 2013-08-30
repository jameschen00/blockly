// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">візуальне середовище програмування</span><span id="blocklyMessage">Blockly (Блоклі)</span><span id="codeTooltip">Див. згенерований код JavaScript. </span><span id="linkTooltip">Зберегти і пов\'язати з блоками.</span><span id="runTooltip">Запустіть програму, визначену блоками у робочій \\nобласті. </span><span id="runProgram">Запустити програму</span><span id="resetProgram">Очистити</span><span id="dialogOk">OK</span><span id="dialogCancel">Скасувати</span><span id="catLogic">Логіка</span><span id="catLoops">Петлі</span><span id="catMath">Математика</span><span id="catText">Текст</span><span id="catLists">Списки</span><span id="catColour">Колір</span><span id="catVariables">Змінні</span><span id="catProcedures">Процедури</span><span id="httpRequestError">Виникла проблема із запитом.</span><span id="linkAlert">Поділитися вашим блоками через посилання:\n\n%1</span><span id="hashError">На жаль, "%1" не відповідає жодній збереженій програмі.</span><span id="xmlError">Не вдалося завантажити ваш збережений файл.  Можливо, він був створений з іншої версії Blockly?</span><span id="listVariable">список</span><span id="textVariable">текст</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Переміщує черепаху вперед або назад на задану \\nкількість. </span><span id="Turtle_moveForward">рухатися вперед на</span><span id="Turtle_moveBackward">рухатися назад на</span><span id="Turtle_turnTooltip">Повертає черепаху вліво або вправо на вказану \\nкількість градусів. </span><span id="Turtle_turnRight">повернути вправо на</span><span id="Turtle_turnLeft">повернути ліворуч на</span><span id="Turtle_widthTooltip">Змінює ширину пера.</span><span id="Turtle_setWidth">встановити ширину</span><span id="Turtle_colourTooltip">Змінює колір пера.</span><span id="Turtle_setColour">встановити колір</span><span id="Turtle_penTooltip">Піднімає або опускає пера, щоб зупинити або \\nпочати малювати. </span><span id="Turtle_penUp">руку вгору</span><span id="Turtle_penDown">руку вниз</span><span id="Turtle_turtleVisibilityTooltip">Робить черепаху (коло і стрілку) видимим або \\nневидимим. </span><span id="Turtle_hideTurtle">приховати черепаху</span><span id="Turtle_showTurtle">показати черепаху</span><span id="Turtle_printHelpUrl">http://uk.wikipedia.org/wiki/Друкарство</span><span id="Turtle_printTooltip">Малює тексту в напрямку руху черепахи на його \\nмісце розташування. </span><span id="Turtle_print">друк</span><span id="Turtle_fontHelpUrl">http://uk.wikipedia.org/wiki/Шрифт</span><span id="Turtle_fontTooltip">Визначає шрифт, що використовується для друку \\nблоку. </span><span id="Turtle_font">шрифт</span><span id="Turtle_fontSize">розмір шрифту</span><span id="Turtle_fontNormal">звичайний</span><span id="Turtle_fontBold">жирний</span><span id="Turtle_fontItalic">курсив</span><span id="Turtle_unloadWarning">Вийшовши з цієї сторінки, ви втратите вашу роботу.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly (Блоклі)</a> : Графіка Черепахи</span></h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><script type="text/javascript" src="../slider.js"><\/script><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" onclick="Turtle.runButtonClick();" title="Черепаха робити те, що говорять блоки."><img src="../../media/1x1.gif" class="run icon21">Запустити програму</button><button id="resetButton" class="primary" onclick="Turtle.resetButtonClick();" style="display: none"><img src="../../media/1x1.gif" class="stop icon21"> Очистити</button></td></tr></table><div id="toolbarDiv"><button class="notext" title="Див. згенерований код JavaScript. " onclick="BlocklyApps.showCode(this);"><img src=\'../../media/1x1.gif\' class="code icon21"></button><button id="linkButton" class="notext" title="Зберегти і пов\'язати з блоками." onclick="BlocklyStorage.link();"><img src=\'../../media/1x1.gif\' class="link icon21"></button><button class="notext" id="captureButton" title="Зберегти малюнок." onclick="Turtle.createImageLink();"><img src=\'../../media/1x1.gif\' class="img icon21"></button><a id="downloadImageLink" download="drawing.png"></a></div><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Черепаха"><block type="draw_move"><value name="VALUE"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block><block type="draw_print"><value name="TEXT"><block type="text"></block></value></block><block type="draw_font"></block></category><category name="Колір"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Логіка"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Петлі"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Математика"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Списки"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">список</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">список</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">список</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">список</title></block></value></block></category><category name="Змінні" custom="VARIABLE"></category><category name="Процедури" custom="PROCEDURE"></category></xml>';
};
