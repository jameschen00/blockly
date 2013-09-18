/**
 * Visual Blocks Language
 *
 * Copyright 2013 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview German strings.
 * @author henning@mst.ch (Heiko Henning)
 */
'use strict';

goog.provide('Blockly.Msg.de');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

// Context menus.
Blockly.Msg.DUPLICATE_BLOCK = 'Kopieren';
Blockly.Msg.REMOVE_COMMENT = 'Kommentar entfernen';
Blockly.Msg.ADD_COMMENT = 'Kommentar hinzufügen';
Blockly.Msg.EXTERNAL_INPUTS = 'externe Eingänge';
Blockly.Msg.INLINE_INPUTS = 'interne Eingänge';
Blockly.Msg.DELETE_BLOCK = 'Block löschen';
Blockly.Msg.DELETE_X_BLOCKS = 'Block %1 löschen';
Blockly.Msg.COLLAPSE_BLOCK = 'Block zusammenfalten';
Blockly.Msg.EXPAND_BLOCK = 'Block entfalten';
Blockly.Msg.DISABLE_BLOCK = 'Block deaktivieren';
Blockly.Msg.ENABLE_BLOCK = 'Block aktivieren';
Blockly.Msg.HELP = 'Hilfe';
Blockly.Msg.COLLAPSE_ALL = 'Collapse Blocks';
Blockly.Msg.EXPAND_ALL = 'Expand Blocks';

// Variable renaming.
Blockly.Msg.CHANGE_VALUE_TITLE = 'Wert ändern:';
Blockly.Msg.NEW_VARIABLE = 'Neue Variable...';
Blockly.Msg.NEW_VARIABLE_TITLE = 'Name der neuen Variable:';
Blockly.Msg.RENAME_VARIABLE = 'Variable umbenennen...';
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Alle "%1" Variablen umbenennen in:';

// Colour Blocks.
Blockly.Msg.COLOUR_PICKER_HELPURL = 'http://de.wikipedia.org/wiki/Farbe';
Blockly.Msg.COLOUR_PICKER_TOOLTIP = 'Wählen eine Farbe von der Palette.';

Blockly.Msg.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
Blockly.Msg.COLOUR_RANDOM_TITLE = 'random colour';
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.';

Blockly.Msg.COLOUR_RGB_HELPURL = 'http://de.wikipedia.org/wiki/RGB-Farbraum';
Blockly.Msg.COLOUR_RGB_TITLE = 'Farbe mit';
Blockly.Msg.COLOUR_RGB_RED = 'rot';
Blockly.Msg.COLOUR_RGB_GREEN = 'grün';
Blockly.Msg.COLOUR_RGB_BLUE = 'blau';
Blockly.Msg.COLOUR_RGB_TOOLTIP = 'Kreiere eine Farbe mit selbst definierten rot, grün und blau Werten. Alle Werte müssen zwischen 0 und 100 liegen.';

Blockly.Msg.COLOUR_BLEND_HELPURL = 'http://meyerweb.com/eric/tools/color-blend/';
Blockly.Msg.COLOUR_BLEND_TITLE = 'mische';
Blockly.Msg.COLOUR_BLEND_COLOUR1 = 'Farbe 1';
Blockly.Msg.COLOUR_BLEND_COLOUR2 = 'mit Farbe 2';
Blockly.Msg.COLOUR_BLEND_RATIO = 'im Verhältniss';
Blockly.Msg.COLOUR_BLEND_TOOLTIP = 'Vermische 2 Farbe mit konfigurierbaren Farbverhältniss (0.0 - 1.0).';

// Loop Blocks.
Blockly.Msg.CONTROLS_REPEAT_HELPURL = 'http://de.wikipedia.org/wiki/For-Schleife';
Blockly.Msg.CONTROLS_REPEAT_TITLE_REPEAT = 'wiederhole';
Blockly.Msg.CONTROLS_REPEAT_TITLE_TIMES = 'mal';
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = 'mache';
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Eine Anweisung mehrfach ausführen.';

Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = 'http://de.wikipedia.org/wiki/Schleife_%28Programmierung%29';
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = 'mache';
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'Wiederhole solange';
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'Wiederhole bis';
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'Führe die Anweisung solange aus wie die Bedingung wahr (true) ist.';
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'Führe die Anweisung solange aus wie die Bedingung falsch (false) ist.';

Blockly.Msg.CONTROLS_FOR_HELPURL = 'http://de.wikipedia.org/wiki/For-Schleif';
Blockly.Msg.CONTROLS_FOR_INPUT_WITH = 'Zähle';
Blockly.Msg.CONTROLS_FOR_INPUT_VAR = 'x';
Blockly.Msg.CONTROLS_FOR_INPUT_FROM = 'von';
Blockly.Msg.CONTROLS_FOR_INPUT_TO = 'bis';
Blockly.Msg.CONTROLS_FOR_INPUT_DO = 'mache';
Blockly.Msg.CONTROLS_FOR_INPUT_BY = 'by';
Blockly.Msg.CONTROLS_FOR_TAIL = '';
Blockly.Msg.CONTROLS_FOR_TOOLTIP = 'Zähle die Variable "%1" von einem Startwert bis zu einem Zielwert und führe für jeden Wert eine Anweisung aus.';

Blockly.Msg.CONTROLS_FOREACH_HELPURL = 'http://de.wikipedia.org/wiki/For-Schleif';
Blockly.Msg.CONTROLS_FOREACH_INPUT_ITEM = 'Für Wert';
Blockly.Msg.CONTROLS_FOREACH_INPUT_VAR = 'x';
Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST = 'aus der Liste';
Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST_TAIL = '';
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = 'mache';
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = 'Führe eine Anweisung für jeden Wert in der Liste aus und setzte dabei die Variable "%1" auf den aktuellen Listen Wert.';

Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://de.wikipedia.org/wiki/Kontrollstruktur';
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'ausbrechen aus der Schleife';
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'mit der nächsten Iteration fortfahren aus der Schleife';
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Die umgebene Schleife beenden.';
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Diese Anweisung abbrechen und mit der nächsten Schleifeniteration fortfahren.';
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = 'Warnung: Diese block sollte nur in einer Schleife verwendet werden.';

// Logic Blocks.
Blockly.Msg.CONTROLS_IF_HELPURL = 'http://code.google.com/p/blockly/wiki/If_Then';
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = 'Wenn eine Bedingung wahr (true) ist, dann führe eine Anweisung aus.';
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = 'Wenn eine Bedingung wahr (true) ist, dann führe die erste Anweisung aus.  Ansonsten führe die zweite Anweisung aus.';
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = 'Wenn der erste Bedingung wahr (true) ist, dann führe die erste Anweisung aus.  Oder wenn die zweite Bedingung wahr (true) ist, dann führe die zweite Anweisung aus.';
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = 'Wenn der erste Bedingung wahr (true) ist, dann führe die erste Anweisung aus.  Oder wenn die zweite Bedingung wahr (true) ist, dann führe die zweite Anweisung aus.  Falls keine der beiden Bedingungen wahr (true) ist, dann führe die dritte Anweisung aus.';
Blockly.Msg.CONTROLS_IF_MSG_IF = 'wenn';
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = 'oder wenn';
Blockly.Msg.CONTROLS_IF_MSG_ELSE = 'oder';
Blockly.Msg.CONTROLS_IF_MSG_THEN = 'mache';
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = 'wenn';
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = 'Hinzufügen, entfernen oder sortieren von Sektionen';
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'oder wenn';
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = 'Eine weitere Bedingung hinzufügen.';
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = 'oder';
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = 'Eine oder Bedingung hinzufügen, führt eine Anweisung aus falls keine Bedingung zutrifft.';

Blockly.Msg.LOGIC_COMPARE_HELPURL = 'http://de.wikipedia.org/wiki/Vergleich_%28Zahlen%29';
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = 'Ist wahr (true) wenn beide Werte identisch sind.';
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = 'Ist wahr (true) wenn beide Werte unterschiedlich sind.';
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = 'Ist wahr (true) wenn der erste Wert kleiner als der zweite Wert ist.';
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = 'Ist wahr (true) wenn der erste Wert kleiner als oder gleich gross wie zweite Wert ist.';
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = 'Ist wahr (true) wenn der erste Wert grösser als der zweite Wert ist.';
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = 'Ist wahr (true) wenn der erste Wert grösser als oder gleich gross wie zweite Wert ist.';

Blockly.Msg.LOGIC_OPERATION_HELPURL = 'http://code.google.com/p/blockly/wiki/And_Or';
Blockly.Msg.LOGIC_OPERATION_AND = 'und';
Blockly.Msg.LOGIC_OPERATION_OR = 'oder';
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = 'Ist wahr (true) wenn beide Werte wahr (true) sind.';
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = 'Ist wahr (true) wenn einer der beiden Werte wahr (true) ist.';

Blockly.Msg.LOGIC_NEGATE_HELPURL = 'http://code.google.com/p/blockly/wiki/Not';
Blockly.Msg.LOGIC_NEGATE_INPUT_NOT = 'nicht';
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = 'Ist wahr (true) wenn der Eingabewert falsch (false) ist.  Ist falsch (false) wenn der Eingabewert wahr (true) ist.';

Blockly.Msg.LOGIC_BOOLEAN_HELPURL = 'http://code.google.com/p/blockly/wiki/True_False';
Blockly.Msg.LOGIC_BOOLEAN_TRUE = 'wahr';
Blockly.Msg.LOGIC_BOOLEAN_FALSE = 'falsch';
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = 'Ist entweder wahr (true) oder falsch (false)';

Blockly.Msg.LOGIC_NULL_HELPURL = 'http://de.wikipedia.org/wiki/Nullwert';
Blockly.Msg.LOGIC_NULL = 'null';
Blockly.Msg.LOGIC_NULL_TOOLTIP = 'Ist NULL.';

Blockly.Msg.LOGIC_TERNARY_HELPURL = 'http://de.wikipedia.org/wiki/%3F:#Auswahloperator';
Blockly.Msg.LOGIC_TERNARY_CONDITION = 'test';
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = 'wenn wahr';
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = 'wenn falsch';
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = 'Überprüft eine Bedingung "test". Wenn die Bedingung wahr ist wird der "wenn wahr" Wert zurückgegeben, andernfalls der "wenn falsch" Wert';

// Math Blocks.
Blockly.Msg.MATH_NUMBER_HELPURL = 'http://de.wikipedia.org/wiki/Zahl';
Blockly.Msg.MATH_NUMBER_TOOLTIP = 'Eine Zahl.';

Blockly.Msg.MATH_ARITHMETIC_HELPURL = 'http://de.wikipedia.org/wiki/Grundrechenart';
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = 'Ist die Summe zweier Werte.';
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = 'Ist die Differenz zweier Werte.';
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Ist das Produkt zweier Werte.';
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Ist der Quotient zweier Werte.';
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = 'Ist der erste Wert potenziert mit dem zweiten Wert.';

Blockly.Msg.MATH_SINGLE_HELPURL = 'http://de.wikipedia.org/wiki/Quadratwurzel';
Blockly.Msg.MATH_SINGLE_OP_ROOT = 'Quadratwurzel';
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = 'Absolutwert';
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = 'Ist die Qudratwurzel eines Wertes.';
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = 'Ist der Absolutwert eines Wertes.';
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = 'Negiert einen Wert.';
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = 'Ist der natürliche Logarithmus eines Wertes.';
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = 'Ist der dekadische Logarithmus eines Wertes.';
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = 'Ist Wert der Exponentialfunktion eines Wertes.';
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = 'Rechnet 10 hoch Eingabewert.';

Blockly.Msg.MATH_TRIG_HELPURL = 'http://de.wikipedia.org/wiki/Trigonometrie';
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = 'Ist der Sinus eins Winkels.';
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = 'Ist der Cosinus eins Winkels.';
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = 'Ist der Tangens eins Winkels.';
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = 'Ist der Arcussinus des Eingabewertes.';
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = 'Ist der Arcuscosinus des Eingabewertes.';
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = 'Ist der Arcustangens des Eingabewertes.';

Blockly.Msg.MATH_CONSTANT_HELPURL = 'http://de.wikipedia.org/wiki/Mathematische_Konstante';
Blockly.Msg.MATH_CONSTANT_TOOLTIP = 'Mathematische Konstanten wie: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026) oder \u221e (unendlich).';

Blockly.Msg.MATH_IS_EVEN = 'ist gerade';
Blockly.Msg.MATH_IS_ODD = 'ist ungerade';
Blockly.Msg.MATH_IS_PRIME = 'ist eine Primenzahl';
Blockly.Msg.MATH_IS_WHOLE = 'ganze Zahl';
Blockly.Msg.MATH_IS_POSITIVE = 'ist positiv';
Blockly.Msg.MATH_IS_NEGATIVE = 'ist negativ';
Blockly.Msg.MATH_IS_DIVISIBLE_BY = 'ist teilbar durch';
Blockly.Msg.MATH_IS_TOOLTIP = 'Überprüft ob eine Zahl gerade, ungerade, eine Primenzahl, ganzzahlig, positiv, negativ oder durch eine zweite Zahl teilbar ist.  Gibt wahr (true) oder falsch (false) zurück.';

Blockly.Msg.MATH_CHANGE_HELPURL = 'http://de.wikipedia.org/wiki/Inkrement_und_Dekrement';
Blockly.Msg.MATH_CHANGE_TITLE_CHANGE = 'erhöhe';
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = 'Variable';
Blockly.Msg.MATH_CHANGE_INPUT_BY = 'um';
Blockly.Msg.MATH_CHANGE_TOOLTIP = 'Addiert einen Wert zur Variable "%1" hinzu.';

Blockly.Msg.MATH_ROUND_HELPURL = 'http://de.wikipedia.org/wiki/Runden';
Blockly.Msg.MATH_ROUND_TOOLTIP = 'Eine Zahl auf oder ab runden.';
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = 'runden';
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = 'auf runden';
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = 'ab runden';

Blockly.Msg.MATH_ONLIST_HELPURL = 'http://www.sysplus.ch/einstieg.php?links=menu&seite=4125&grad=Crash&prog=Excel';
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = 'Summme einer Liste';
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = 'Minimalwert einer Liste';
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = 'Maximalwert einer Liste';
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = 'Mittelwert einer Liste';
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = 'Median einer Liste';
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = 'Modulo / Restwert einer Liste';
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = 'Standart Abweichung einer Liste';
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = 'Zufallswert einer Liste';
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = 'Ist die Summe aller Werte in einer Liste.';
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = 'Ist der kleinste Wert in einer Liste.';
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = 'Ist der grösste Wert in einer Liste.';
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = 'Ist der Durchschnittswert aller Werte in einer Liste.';
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = 'Ist der Zentralwert aller Werte in einer Liste.';
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = 'Findet den am häufigsten vorkommenden Wert in einer Liste.  Falls kein Wert öfter vorkomme als alle anderen, wird die originale Liste zurückgegen';
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = 'Ist die standartiesierte Standartabweichung aller Werte in der Liste';
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = 'Gebe einen Zufallswert aus der Liste zurück.';

Blockly.Msg.MATH_MODULO_HELPURL = 'http://de.wikipedia.org/wiki/Modulo';
Blockly.Msg.MATH_MODULO_INPUT_DIVIDEND = 'Rest von';
Blockly.Msg.MATH_MODULO_TOOLTIP = 'Der Rest nach einer Division.';

Blockly.Msg.MATH_CONSTRAIN_HELPURL = 'http://en.wikipedia.org/wiki/Clamping_%28graphics%29';
Blockly.Msg.MATH_CONSTRAIN_INPUT_CONSTRAIN = 'begrenzen';
Blockly.Msg.MATH_CONSTRAIN_INPUT_LOW = 'von';
Blockly.Msg.MATH_CONSTRAIN_INPUT_HIGH = 'bis';
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = 'Begrenzt den Wertebereich mittels von / bis Werte. (inklusiv)';

Blockly.Msg.MATH_RANDOM_INT_HELPURL = 'http://de.wikipedia.org/wiki/Zufallszahlen';
Blockly.Msg.MATH_RANDOM_INT_INPUT_FROM = 'ganzahliger Zufallswerte zwischen';
Blockly.Msg.MATH_RANDOM_INT_INPUT_TO = 'und';
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = 'Erzeuge eine ganzahligen Zufallswert zwischen zwei Werten (inklusiv).';

Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = 'http://de.wikipedia.org/wiki/Zufallszahlen';
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = 'Zufallszahl (0.0 -1.0)';
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = 'Erzeuge eine Zufallszahl zwischen 0.0 (inklusiv) und 1.0 (exklusiv).';

// Text Blocks.
Blockly.Msg.TEXT_TEXT_HELPURL = 'http://de.wikipedia.org/wiki/Zeichenkette';
Blockly.Msg.TEXT_TEXT_TOOLTIP = 'Ein Buchstabe, Text oder Satz.';

Blockly.Msg.TEXT_JOIN_HELPURL = '';
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = 'Erstelle Text aus';
Blockly.Msg.TEXT_JOIN_TOOLTIP = 'Erstellt einen Text durch das verbinden von mehreren Textelementen.';

Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = 'verbinden';
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = 'Hinzufügen, entfernen und sortieren von Elementen.';

Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = 'Element';
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Ein Element zum Text hinzufügen.';

Blockly.Msg.TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.Msg.TEXT_APPEND_TO = 'An';
Blockly.Msg.TEXT_APPEND_APPENDTEXT = 'Text anhängen';
Blockly.Msg.TEXT_APPEND_VARIABLE = 'Variable';
Blockly.Msg.TEXT_APPEND_TOOLTIP = 'Text an die Variable "%1" anhängen.';

Blockly.Msg.TEXT_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.Msg.TEXT_LENGTH_INPUT_LENGTH = 'länge';
Blockly.Msg.TEXT_LENGTH_TOOLTIP = 'Die Anzahl von Zeichen in einem Textes. (inkl. Leerzeichen)';

Blockly.Msg.TEXT_ISEMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.Msg.TEXT_ISEMPTY_INPUT_ISEMPTY = 'ist leer?';
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = 'Ist wahr (true), wenn der Text leer ist.';

Blockly.Msg.TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = 'im Text';
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = 'Suche erstes Vorkommniss des Begriff';
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = 'Suche letztes Vorkommniss des Begriff';
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = 'Findest das erste / letzte Vorkommniss eines cuchbegriffes in einem Text.  Gibt die Position des Begriffes oder 0 zurück.';

Blockly.Msg.TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = 'vom Text';
Blockly.Msg.TEXT_CHARAT_FROM_START = 'Nehme Buchstabe #ten';
Blockly.Msg.TEXT_CHARAT_FROM_END = 'Nehme #te Buchstabe von hinten';
Blockly.Msg.TEXT_CHARAT_FIRST = 'Nehme ersten Buchstabe';
Blockly.Msg.TEXT_CHARAT_LAST = 'Nehme letzten Buchstabe';
Blockly.Msg.TEXT_CHARAT_RANDOM = 'Nehme zufälligen Buchstabe';
Blockly.Msg.TEXT_CHARAT_TOOLTIP = 'Extrahiere einen Buchstaben von einer spezifizierten Position.';

Blockly.Msg.TEXT_SUBSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.Msg.TEXT_SUBSTRING_INPUT_IN_TEXT = 'in text';
Blockly.Msg.TEXT_SUBSTRING_INPUT_AT1 = 'get substring from';
Blockly.Msg.TEXT_SUBSTRING_INPUT_AT2 = 'to';
Blockly.Msg.TEXT_SUBSTRING_FROM_START = 'Buchstabe #ten';
Blockly.Msg.TEXT_SUBSTRING_FROM_END = '#te Buchstabe von hinten';
Blockly.Msg.TEXT_SUBSTRING_FIRST = 'ersten Buchstabe';
Blockly.Msg.TEXT_SUBSTRING_LAST = 'letzten Buchstabe';
Blockly.Msg.TEXT_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';

Blockly.Msg.TEXT_CHANGECASE_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'umwandeln in GROSSBUCHSTABEN';
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'umwandeln in kleinbuchstaben';
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = 'umwandeln in Wörter';
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = 'Wandelt Schreibweise von Texten um, in Grossbuchstaben, Kleinbuchstaben oder den ersten Buchstaben jedes Wortes gross und die anderen klein.';

Blockly.Msg.TEXT_TRIM_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = 'entferne Leerzeichen von Anfang und Ende Seiten';
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = 'entferne Leerzeichen von Anfang Seite';
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = 'entferne Leerzeichen von Ende Seite';
Blockly.Msg.TEXT_TRIM_TOOLTIP = 'Entfernt Leerzeichen vom Anfang und / oder Ende eines Textes.';

Blockly.Msg.TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.Msg.TEXT_PRINT_TITLE_PRINT = 'Ausgabe';
Blockly.Msg.TEXT_PRINT_TOOLTIP = 'Gib den Inhalt einer Variable aus.';

Blockly.Msg.TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = 'Fragt nach Text mit Hinweis';
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = 'Fragt nach Zahl mit Hinweis';
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = 'Fragt den Benutzer nach ein Zahl.';
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = 'Fragt den Benutzer nach einem Text.';

// Lists Blocks.
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = 'Erzeuge eine leere Liste';
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = 'Erzeugt eine leere Liste ohne Inhalt.';

Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = 'Erzeuge Liste mit';
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = 'Erzeugt eine List mit konfigurierten Elementen.';

Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'Liste';
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Hinzufügen, entfernen und sortieren von Elementen.';

Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = 'Element';
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Ein Element zur Liste hinzufügen.';

Blockly.Msg.LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.Msg.LISTS_REPEAT_INPUT_WITH = 'Erzeuge Liste mit Element';
Blockly.Msg.LISTS_REPEAT_INPUT_REPEATED = 'wiederhole es';
Blockly.Msg.LISTS_REPEAT_INPUT_TIMES = 'mal';
Blockly.Msg.LISTS_REPEAT_TOOLTIP = 'Erzeugt eine Liste mit einer variablen Anzahl von Elementen';

Blockly.Msg.LISTS_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.Msg.LISTS_LENGTH_INPUT_LENGTH = 'länge';
Blockly.Msg.LISTS_LENGTH_TOOLTIP = 'Die Anzahl von Elementen in der Liste.';

Blockly.Msg.LISTS_IS_EMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.Msg.LISTS_INPUT_IS_EMPTY = 'ist leer?';
Blockly.Msg.LISTS_TOOLTIP = 'Ist wahr (true), wenn die Liste leer ist.';

Blockly.Msg.LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = 'in der Liste';
Blockly.Msg.LISTS_INDEX_OF_FIRST = 'Suche erstes Vorkommniss';
Blockly.Msg.LISTS_INDEX_OF_LAST = 'Suche letztes Vorkommniss';
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = 'Sucht die Position (index) eines Elementes in der Liste Gibt 0 zurück wenn nichts gefunden wurde.';

Blockly.Msg.LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.Msg.LISTS_GET_INDEX_GET = 'Nehme';
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = 'Nehme und entferne';
Blockly.Msg.LISTS_GET_INDEX_REMOVE = 'Entferne';
Blockly.Msg.LISTS_GET_INDEX_FROM_START = '#te';
Blockly.Msg.LISTS_GET_INDEX_FROM_END = '#te von hinten';
Blockly.Msg.LISTS_GET_INDEX_FIRST = 'erste';
Blockly.Msg.LISTS_GET_INDEX_LAST = 'letzte';
Blockly.Msg.LISTS_GET_INDEX_RANDOM = 'zufälliges';
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = 'Element von der Liste';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_START = 'Extrahiere das #1te Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_END = 'Extrahiere das #1te Element vom Ende der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Extrahiere das erste Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Extrahiere das letzte Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Extrahiere ein zufälliges Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_START = 'Extrahiere und entfernt das #1te Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_END = 'Extrahiere und entfernt das #1te Element vom Ende der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Extrahiere und entfernt das erste Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Extrahiere und entfernt das letzte Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Extrahiere und entfernt ein zufälliges Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_START = 'Entfernt das #1te Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_END = 'Entfernt das #1te Element vom Ende der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Entfernt das erste Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Entfernt das letzte Element von der Liste.';
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Entfernt ein zufälliges Element von der Liste.';

Blockly.Msg.LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = 'in list';
Blockly.Msg.LISTS_SET_INDEX_SET = 'set';
Blockly.Msg.LISTS_SET_INDEX_INSERT = 'insert';
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = 'auf';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_START = 'Sets the item at the specified position in a list.  #1 is the first item.';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_END = 'Sets the item at the specified position in a list.  #1 is the last item.';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_START = 'Inserts the item at the specified position in a list.  #1 is the first item.';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_END = 'Inserts the item at the specified position in a list.  #1 is the last item.';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = 'in list';
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_AT1 = 'get sub-list from';
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_AT2 = 'to';
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

// Variables Blocks.
Blockly.Msg.VARIABLES_GET_HELPURL = 'http://de.wikipedia.org/wiki/Variable_%28Programmierung%29';
Blockly.Msg.VARIABLES_GET_TITLE = '';
Blockly.Msg.VARIABLES_GET_ITEM = 'Variable';
Blockly.Msg.VARIABLES_GET_TAIL = '';
Blockly.Msg.VARIABLES_GET_TOOLTIP = 'Gibt den Wert der Variable zurück.';
Blockly.Msg.VARIABLES_GET_CREATE_SET = 'Erzeuge "Schreibe %1"';

Blockly.Msg.VARIABLES_SET_HELPURL = 'http://de.wikipedia.org/wiki/Variable_%28Programmierung%29';
Blockly.Msg.VARIABLES_SET_TITLE = 'Schreibe';
Blockly.Msg.VARIABLES_SET_ITEM = 'Variable';
Blockly.Msg.VARIABLES_SET_TAIL = '';
Blockly.Msg.VARIABLES_SET_TOOLTIP = 'Setzt den Wert einer Variable.';
Blockly.Msg.VARIABLES_SET_CREATE_GET = 'Erzeuge "Lese %1"';

// Procedures Blocks.
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = 'http://de.wikipedia.org/wiki/Prozedur_%28Programmierung%29';
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = 'to';
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = 'Funktionsblock';
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = 'mit:';
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = '';
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = 'Ein Funktionsblock ohne Rückgabewert.';

Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = 'http://de.wikipedia.org/wiki/Prozedur_%28Programmierung%29';
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = 'gebe zurück';
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = 'Ein Funktionsblock mit Rückgabewert.';

Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = 'Warnung: dieser Funktionsblock hat doppelte Parameter.';

Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = 'http://de.wikipedia.org/wiki/Prozedur_%28Programmierung%29';
Blockly.Msg.PROCEDURES_CALLNORETURN_CALL = '';
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = 'Rufe einen Funktionsblock ohne Rückgabewert auf.';

Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = 'http://de.wikipedia.org/wiki/Prozedur_%28Programmierung%29';
Blockly.Msg.PROCEDURES_CALLRETURN_CALL = Blockly.Msg.PROCEDURES_CALLNORETURN_CALL;
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = 'Rufe einen Funktionsblock mit Rückgabewert auf.';

Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = 'Parameter';
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = 'Variable:';

Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = 'Markiere Funktionsblock';
Blockly.Msg.PROCEDURES_CREATE_DO = 'Erzeuge "Aufruf %1"';

Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = 'Wenn der erste Wert wahr (true) ist, Gebe den zweiten Wert zurück.';
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = 'Warnung: Dieser Block darf nur innerhalb eines Funktionsblock genutzt werden.';
