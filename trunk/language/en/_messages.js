/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
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
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

// Context menus.
Blockly.MSG_DUPLICATE_BLOCK = 'Duplicate';
Blockly.MSG_REMOVE_COMMENT = 'Remove Comment';
Blockly.MSG_ADD_COMMENT = 'Add Comment';
Blockly.MSG_EXTERNAL_INPUTS = 'External Inputs';
Blockly.MSG_INLINE_INPUTS = 'Inline Inputs';
Blockly.MSG_DELETE_BLOCK = 'Delete Block';
Blockly.MSG_DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.MSG_COLLAPSE_BLOCK = 'Collapse Block';
Blockly.MSG_EXPAND_BLOCK = 'Expand Block';
Blockly.MSG_DISABLE_BLOCK = 'Disable Block';
Blockly.MSG_ENABLE_BLOCK = 'Enable Block';
Blockly.MSG_HELP = 'Help';
Blockly.MSG_COLLAPSE_ALL = 'Collapse Blocks';
Blockly.MSG_EXPAND_ALL = 'Expand Blocks';

// Variable renaming.
Blockly.MSG_CHANGE_VALUE_TITLE = 'Change value:';
Blockly.MSG_NEW_VARIABLE = 'New variable...';
Blockly.MSG_NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.MSG_RENAME_VARIABLE = 'Rename variable...';
Blockly.MSG_RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';

// Colour Blocks.
Blockly.LANG_COLOUR_PICKER_HELPURL = 'http://en.wikipedia.org/wiki/Color';
Blockly.LANG_COLOUR_PICKER_TOOLTIP = 'Choose a colour from the palette.';

Blockly.LANG_COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
Blockly.LANG_COLOUR_RANDOM_TITLE = 'random colour';
Blockly.LANG_COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.';

Blockly.LANG_COLOUR_RGB_HELPURL = 'http://www.december.com/html/spec/colorper.html';
Blockly.LANG_COLOUR_RGB_TITLE = 'colour with';
Blockly.LANG_COLOUR_RGB_RED = 'red';
Blockly.LANG_COLOUR_RGB_GREEN = 'green';
Blockly.LANG_COLOUR_RGB_BLUE = 'blue';
Blockly.LANG_COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red, green, and blue.  All values must be between 0 and 100.';

Blockly.LANG_COLOUR_BLEND_HELPURL = 'http://meyerweb.com/eric/tools/color-blend/';
Blockly.LANG_COLOUR_BLEND_TITLE = 'blend';
Blockly.LANG_COLOUR_BLEND_COLOUR1 = 'colour 1';
Blockly.LANG_COLOUR_BLEND_COLOUR2 = 'colour 2';
Blockly.LANG_COLOUR_BLEND_RATIO = 'ratio';
Blockly.LANG_COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

// Loop Blocks.
Blockly.LANG_CONTROLS_REPEAT_HELPURL = 'http://en.wikipedia.org/wiki/For_loop';
Blockly.LANG_CONTROLS_REPEAT_TITLE_REPEAT = 'repeat';
Blockly.LANG_CONTROLS_REPEAT_TITLE_TIMES = 'times';
Blockly.LANG_CONTROLS_REPEAT_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';

Blockly.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'http://code.google.com/p/blockly/wiki/Repeat';
Blockly.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until';
Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

Blockly.LANG_CONTROLS_FOR_HELPURL = 'http://en.wikipedia.org/wiki/For_loop';
Blockly.LANG_CONTROLS_FOR_INPUT_WITH = 'count with';
Blockly.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
Blockly.LANG_CONTROLS_FOR_INPUT_FROM = 'from';
Blockly.LANG_CONTROLS_FOR_INPUT_TO = 'to';
Blockly.LANG_CONTROLS_FOR_INPUT_BY = 'by';
Blockly.LANG_CONTROLS_FOR_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_FOR_TAIL = '';
Blockly.LANG_CONTROLS_FOR_TOOLTIP = 'Count from a start number to an end number by the specified interval.  For each count, set the current count number to variable "%1", and then do some statements.';

Blockly.LANG_CONTROLS_FOREACH_HELPURL = 'http://en.wikipedia.org/wiki/For_loop';
Blockly.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'for each item';
Blockly.LANG_CONTROLS_FOREACH_INPUT_VAR = 'x';
Blockly.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'in list';
Blockly.LANG_CONTROLS_FOREACH_INPUT_INLIST_TAIL = '';
Blockly.LANG_CONTROLS_FOREACH_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the item to  variable "%1", and then do some statements.';

Blockly.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration of loop';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and continue with the next iteration.';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning:  This block may only be used within a loop.';

// Logic Blocks.
Blockly.LANG_CONTROLS_IF_HELPURL = 'http://code.google.com/p/blockly/wiki/If_Then';
Blockly.LANG_CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
Blockly.LANG_CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements.  Otherwise, do the second block of statements.';
Blockly.LANG_CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements.  Otherwise, if the second value is true, do the second block of statements.';
Blockly.LANG_CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements.  Otherwise, if the second value is true, do the second block of statements.  If none of the values are true, do the last block of statements.';
Blockly.LANG_CONTROLS_IF_MSG_IF = 'if';
Blockly.LANG_CONTROLS_IF_MSG_ELSEIF = 'else if';
Blockly.LANG_CONTROLS_IF_MSG_ELSE = 'else';
Blockly.LANG_CONTROLS_IF_MSG_THEN = 'do';
Blockly.LANG_CONTROLS_IF_IF_TITLE_IF = 'if';
Blockly.LANG_CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';
Blockly.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'else if';
Blockly.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';
Blockly.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'else';
Blockly.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

Blockly.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LT = 'Return true if the first input is smaller than the second input.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LTE = 'Return true if the first input is smaller than or equal to the second input.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GT = 'Return true if the first input is greater than the second input.';
Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GTE = 'Return true if the first input is greater  than or equal to the second input.';

Blockly.LANG_LOGIC_OPERATION_HELPURL = 'http://code.google.com/p/blockly/wiki/And_Or';
Blockly.LANG_LOGIC_OPERATION_AND = 'and';
Blockly.LANG_LOGIC_OPERATION_OR = 'or';
Blockly.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.';
Blockly.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Return true if either inputs are true.';

Blockly.LANG_LOGIC_NEGATE_HELPURL = 'http://code.google.com/p/blockly/wiki/Not';
Blockly.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
Blockly.LANG_LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false.  Returns false if the input is true.';

Blockly.LANG_LOGIC_BOOLEAN_HELPURL = 'http://code.google.com/p/blockly/wiki/True_False';
Blockly.LANG_LOGIC_BOOLEAN_TRUE = 'true';
Blockly.LANG_LOGIC_BOOLEAN_FALSE = 'false';
Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

Blockly.LANG_LOGIC_NULL_HELPURL = 'http://en.wikipedia.org/wiki/Nullable_type';
Blockly.LANG_LOGIC_NULL = 'null';
Blockly.LANG_LOGIC_NULL_TOOLTIP = 'Returns null.';

Blockly.LANG_LOGIC_TERNARY_HELPURL = 'http://en.wikipedia.org/wiki/%3F:';
Blockly.LANG_LOGIC_TERNARY_CONDITION = 'test';
Blockly.LANG_LOGIC_TERNARY_IF_TRUE = 'if true';
Blockly.LANG_LOGIC_TERNARY_IF_FALSE = 'if false';
Blockly.LANG_LOGIC_TERNARY_TOOLTIP = 'Check the condition in "test". If the condition is true  returns the "if true" value, otherwise returns the "if false" value.';

// Math Blocks.
Blockly.LANG_MATH_NUMBER_HELPURL = 'http://en.wikipedia.org/wiki/Number';
Blockly.LANG_MATH_NUMBER_TOOLTIP = 'A number.';

Blockly.LANG_MATH_ARITHMETIC_HELPURL = 'http://en.wikipedia.org/wiki/Arithmetic';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to the power of the second number.';

Blockly.LANG_MATH_SINGLE_HELPURL = 'http://en.wikipedia.org/wiki/Square_root';
Blockly.LANG_MATH_SINGLE_OP_ROOT = 'square root';
Blockly.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absolute';
Blockly.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

Blockly.LANG_MATH_TRIG_HELPURL = 'http://en.wikipedia.org/wiki/Trigonometric_functions';
Blockly.LANG_MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).';
Blockly.LANG_MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).';
Blockly.LANG_MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).';
Blockly.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
Blockly.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
Blockly.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

Blockly.LANG_MATH_CONSTANT_HELPURL = 'http://en.wikipedia.org/wiki/Mathematical_constant';
Blockly.LANG_MATH_CONSTANT_TOOLTIP = 'Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026),  sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).';

Blockly.LANG_MATH_IS_EVEN = 'is even';
Blockly.LANG_MATH_IS_ODD = 'is odd';
Blockly.LANG_MATH_IS_PRIME = 'is prime';
Blockly.LANG_MATH_IS_WHOLE = 'is whole';
Blockly.LANG_MATH_IS_POSITIVE = 'is positive';
Blockly.LANG_MATH_IS_NEGATIVE = 'is negative';
Blockly.LANG_MATH_IS_DIVISIBLE_BY = 'is divisible by';
Blockly.LANG_MATH_IS_TOOLTIP = 'Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number.  Returns true or false.';

Blockly.LANG_MATH_CHANGE_HELPURL = 'http://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
Blockly.LANG_MATH_CHANGE_TITLE_CHANGE = 'change';
Blockly.LANG_MATH_CHANGE_TITLE_ITEM = 'item';
Blockly.LANG_MATH_CHANGE_INPUT_BY = 'by';
Blockly.LANG_MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';

Blockly.LANG_MATH_ROUND_HELPURL = 'http://en.wikipedia.org/wiki/Rounding';
Blockly.LANG_MATH_ROUND_TOOLTIP = 'Round a number up or down.';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUND = 'round';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

Blockly.LANG_MATH_ONLIST_HELPURL = '';
Blockly.LANG_MATH_ONLIST_OPERATOR_SUM = 'sum of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_MIN = 'min of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_MAX = 'max of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_AVERAGE = 'average of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_MEDIAN = 'median of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_MODE = 'modes of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_RANDOM = 'random item of list';
Blockly.LANG_MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the arithmetic mean of the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

Blockly.LANG_MATH_MODULO_HELPURL = 'http://en.wikipedia.org/wiki/Modulo_operation';
Blockly.LANG_MATH_MODULO_INPUT_DIVIDEND = 'remainder of';
Blockly.LANG_MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.';

Blockly.LANG_MATH_CONSTRAIN_HELPURL = 'http://en.wikipedia.org/wiki/Clamping_%28graphics%29';
Blockly.LANG_MATH_CONSTRAIN_INPUT_CONSTRAIN = 'constrain';
Blockly.LANG_MATH_CONSTRAIN_INPUT_LOW = 'low';
Blockly.LANG_MATH_CONSTRAIN_INPUT_HIGH = 'high';
Blockly.LANG_MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

Blockly.LANG_MATH_RANDOM_INT_HELPURL = 'http://en.wikipedia.org/wiki/Random_number_generation';
Blockly.LANG_MATH_RANDOM_INT_INPUT_FROM = 'random integer from';
Blockly.LANG_MATH_RANDOM_INT_INPUT_TO = 'to';
Blockly.LANG_MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two  specified limits, inclusive.';

Blockly.LANG_MATH_RANDOM_FLOAT_HELPURL = 'http://en.wikipedia.org/wiki/Random_number_generation';
Blockly.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
Blockly.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).';

// Text Blocks.
Blockly.LANG_TEXT_TEXT_HELPURL = 'http://en.wikipedia.org/wiki/String_(computer_science)';
Blockly.LANG_TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

Blockly.LANG_TEXT_JOIN_HELPURL = '';
Blockly.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
Blockly.LANG_TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining  together any number of items.';

Blockly.LANG_TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
Blockly.LANG_TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';

Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = 'item';
Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

Blockly.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_APPEND_TO = 'to';
Blockly.LANG_TEXT_APPEND_APPENDTEXT = 'append text';
Blockly.LANG_TEXT_APPEND_VARIABLE = 'item';
Blockly.LANG_TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

Blockly.LANG_TEXT_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_LENGTH_INPUT_LENGTH = 'length of';
Blockly.LANG_TEXT_LENGTH_TOOLTIP = 'Returns number of letters (including spaces) in the provided text.';

Blockly.LANG_TEXT_ISEMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'is empty';
Blockly.LANG_TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

Blockly.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'in text';
Blockly.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text';
Blockly.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text';
Blockly.LANG_TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence  of first text in the second text.  Returns 0 if text is not found.';

Blockly.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_CHARAT_INPUT_INTEXT = 'in text';
Blockly.LANG_TEXT_CHARAT_FROM_START = 'get letter #';
Blockly.LANG_TEXT_CHARAT_FROM_END = 'get letter # from end';
Blockly.LANG_TEXT_CHARAT_FIRST = 'get first letter';
Blockly.LANG_TEXT_CHARAT_LAST = 'get last letter';
Blockly.LANG_TEXT_CHARAT_RANDOM = 'get random letter';
Blockly.LANG_TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

Blockly.LANG_TEXT_SUBSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_SUBSTRING_INPUT_IN_TEXT = 'in text';
Blockly.LANG_TEXT_SUBSTRING_INPUT_AT1 = 'get substring from';
Blockly.LANG_TEXT_SUBSTRING_INPUT_AT2 = 'to';
Blockly.LANG_TEXT_SUBSTRING_FROM_START = 'letter #';
Blockly.LANG_TEXT_SUBSTRING_FROM_END = 'letter # from end';
Blockly.LANG_TEXT_SUBSTRING_FIRST = 'first letter';
Blockly.LANG_TEXT_SUBSTRING_LAST = 'last letter';
Blockly.LANG_TEXT_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';

Blockly.LANG_TEXT_CHANGECASE_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case';
Blockly.LANG_TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';

Blockly.LANG_TEXT_TRIM_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides';
Blockly.LANG_TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side';
Blockly.LANG_TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side';
Blockly.LANG_TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces  removed from one or both ends.';

Blockly.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_PRINT_TITLE_PRINT = 'print';
Blockly.LANG_TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';

Blockly.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
Blockly.LANG_TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message';
Blockly.LANG_TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message';
Blockly.LANG_TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.';
Blockly.LANG_TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.';

// Lists Blocks.
Blockly.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
Blockly.LANG_LISTS_CREATE_EMPTY_TITLE = 'create empty list';
Blockly.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

Blockly.LANG_LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
Blockly.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';

Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';

Blockly.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'item';
Blockly.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

Blockly.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_REPEAT_INPUT_WITH = 'create list with item';
Blockly.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repeated';
Blockly.LANG_LISTS_REPEAT_INPUT_TIMES = 'times';
Blockly.LANG_LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value repeated the specified number of times.';

Blockly.LANG_LISTS_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_LISTS_LENGTH_INPUT_LENGTH = 'length of';
Blockly.LANG_LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

Blockly.LANG_LISTS_IS_EMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_LISTS_INPUT_IS_EMPTY = 'is empty';
Blockly.LANG_LISTS_TOOLTIP = 'Returns true if the list is empty.';

Blockly.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_INDEX_OF_FIRST = 'find first occurrence of item';
Blockly.LANG_LISTS_INDEX_OF_LAST = 'find last occurrence of item';
Blockly.LANG_LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence  of the item in the list.  Returns 0 if text is not found.';

Blockly.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_GET_INDEX_GET = 'get';
Blockly.LANG_LISTS_GET_INDEX_GET_REMOVE = 'get and remove';
Blockly.LANG_LISTS_GET_INDEX_REMOVE = 'remove';
Blockly.LANG_LISTS_GET_INDEX_FROM_START = '#';
Blockly.LANG_LISTS_GET_INDEX_FROM_END = '# from end';
Blockly.LANG_LISTS_GET_INDEX_FIRST = 'first';
Blockly.LANG_LISTS_GET_INDEX_LAST = 'last';
Blockly.LANG_LISTS_GET_INDEX_RANDOM = 'random';
Blockly.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_FROM_START = 'Returns the item at the specified position in a list.  #1 is the first item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_FROM_END = 'Returns the item at the specified position in a list.  #1 is the last item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_START = 'Removes and returns the item at the specified position  in a list.  #1 is the first item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_END = 'Removes and returns the item at the specified position in a list.  #1 is the last item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_START = 'Removes the item at the specified position   in a list.  #1 is the first item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_END = 'Removes the item at the specified position in a list.  #1 is the last item.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.';

Blockly.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_SET_INDEX_SET = 'set';
Blockly.LANG_LISTS_SET_INDEX_INSERT = 'insert at';
Blockly.LANG_LISTS_SET_INDEX_INPUT_TO = 'as';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_FROM_START = 'Sets the item at the specified position in a list.  #1 is the first item.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_FROM_END = 'Sets the item at the specified position in a list.  #1 is the last item.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_START = 'Inserts the item at the specified position in a list.  #1 is the first item.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_END = 'Inserts the item at the specified position in a list.  #1 is the last item.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

Blockly.LANG_LISTS_GET_SUBLIST_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_GET_SUBLIST_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_GET_SUBLIST_INPUT_AT1 = 'get sub-list from';
Blockly.LANG_LISTS_GET_SUBLIST_INPUT_AT2 = 'to';
Blockly.LANG_LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

// Variables Blocks.
Blockly.LANG_VARIABLES_GET_HELPURL = 'http://en.wikipedia.org/wiki/Variable_(computer_science)';
Blockly.LANG_VARIABLES_GET_TITLE = '';
Blockly.LANG_VARIABLES_GET_ITEM = 'item';
Blockly.LANG_VARIABLES_GET_TAIL = '';
Blockly.LANG_VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';
Blockly.LANG_VARIABLES_GET_CREATE_SET = 'Create "set %1"';

Blockly.LANG_VARIABLES_SET_HELPURL = 'http://en.wikipedia.org/wiki/Variable_(computer_science)';
Blockly.LANG_VARIABLES_SET_TITLE = 'set';
Blockly.LANG_VARIABLES_SET_ITEM = 'item';
Blockly.LANG_VARIABLES_SET_TAIL = 'to';
Blockly.LANG_VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
Blockly.LANG_VARIABLES_SET_CREATE_GET = 'Create "get %1"';

// Procedures Blocks.
Blockly.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_DEFNORETURN_TITLE = 'to';
Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'do something';
Blockly.LANG_PROCEDURES_BEFORE_PARAMS = 'with:';
Blockly.LANG_PROCEDURES_DEFNORETURN_DO = '';
Blockly.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'Creates a function with no output.';

Blockly.LANG_PROCEDURES_DEFRETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_DEFRETURN_TITLE = Blockly.LANG_PROCEDURES_DEFNORETURN_TITLE;
Blockly.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.LANG_PROCEDURES_DEFRETURN_DO = Blockly.LANG_PROCEDURES_DEFNORETURN_DO;
Blockly.LANG_PROCEDURES_DEFRETURN_RETURN = 'return';
Blockly.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'Creates a function with an output.';

Blockly.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning:  This function has duplicate parameters.';

Blockly.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_CALLNORETURN_CALL = '';
Blockly.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Run the user-defined function "%1".';

Blockly.LANG_PROCEDURES_CALLRETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.LANG_PROCEDURES_CALLNORETURN_CALL;
Blockly.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Run the user-defined function "%1" and use its output.';

Blockly.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
Blockly.LANG_PROCEDURES_MUTATORARG_TITLE = 'input name:';

Blockly.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Highlight procedure definition';
Blockly.LANG_PROCEDURES_CREATE_DO = 'Create "%1"';

Blockly.LANG_PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then return a value.';
Blockly.LANG_PROCEDURES_IFRETURN_WARNING = 'Warning: This block may only be used within a function definition.';
