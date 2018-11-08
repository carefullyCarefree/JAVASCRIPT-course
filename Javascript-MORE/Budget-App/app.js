/*
part 1
- Add event listener on button
- Get text and values out of the input fields
- Add items to the data structure and then to the UI
- Calculate Budget
- Update the UI
part 2
- Add event handler to the red x next to the inc/exp items
- Delete the item from our data structure
- Remove the item from the UI
- Re-calculate budget after item is deleted
- update the UI based on the new budget
part 3
- Calculate percentages
- Update percentages in UI
- Update month
- Number formatting
- improve input field UX

*****MODULES******
UI MODULE
  Get input values
  Add the new item to UI
  Update the UI

DATA MODULE
  Add the new item to our data structure
  Calculate budget

CONTROLLER MODULE
  Add event handler

  var budgetController = (function() {
    var x = 23;
    var add = function(a) {
      return x + a;
    }
    return {
      publicTest: function(b) {
        console.log(add(b));
      }
    }
  })();

*/
/* =========================================================
==================== BUDGET CONTROLLER ======================= */

var budgetController = (function() {

    var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function (totalIncome) {

        if (totalIncome > 0) {
          this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
          this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
      return this.percentage;
    },

    Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };

    var calculateTotal = function(type) {
      var sum = 0;
      data.allItems[type].forEach(function(curEl) {
        sum += curEl.value;
      });
      data.totals[type] = sum;
    };


    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: -1
    };

    return {
      addItem: function(type, des, val) {
          var newItem, ID;
          // Create new ID
          if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
          } else {
            ID = 0;
          }

          //Create new item base on type(inc or exp)
          if(type === "exp") {
            newItem = new Expense(ID, des, val);
          } else if (type === "inc") {
            newItem = new Income(ID, des, val);
          }
          //Push it into the data structure
          data.allItems[type].push(newItem);
          return newItem;
      },

      deleteItem: function (type, id) {
      var ids, index;

      ids = data.allItems[type].map(function(current) {
          return current.id;
        });

        index = ids.indexOf(id);

        if (index !== -1) {
          data.allItems[type].splice(index, 1);
        }
      },

      calculateBudget: function() {

        // calculate total income and expenses
        calculateTotal('exp');
        calculateTotal('inc');
        // calculate the budget: income - expenses
        data.budget = data.totals.inc - data.totals.exp;
        // calculate the percentage of income spent on each expense
        if(data.totals.inc > 0) {
          data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
          data.percentage = -1;
        }

      },

      calculatePercentages: function () {

        data.allItems.exp.forEach(function(curVal) {
          curVal.calcPercentage(data.totals.inc);
        });
      },

      getPercentages: function () {
        var allPerc = data.allItems.exp.map(function (cur) {
          return cur.getPercentage();
        });
        return allPerc;
      },

      getBudget: function() {
        return {
          budget: data.budget,
          totalInc: data.totals.inc,
          totalExp: data.totals.exp,
          percentage: data.percentage
        }
      },


      testing: function() {
        console.log(data);
      }
    };

})();

/* =========================================================
=============== UI CONTROLLER ==============================
============================================================*/

var UIController = (function(){

  var DOMstrings = {
    inputType: ".plusMinus-select",
    inputDescription: ".description",
    inputAmount: ".amount",
    inputButton: '.add__btn',
    inputButtonRed: '.ion-ios-checkmark-outline',
    incomeContainer: '.incomeItems',
    expenseContaner: '.expenseItems',
    budgetLabel: '.currentMoney',
    incomeLabel: '.budget-value-income',
    expenseLabel: '.budget-value-expense',
    percentageLabel: '.total-budget-percent',
    container: '.moneyInputs',
    expensesPercLabel: '.budget-percent-value',
    dateLabel: '.year'
  };

  var formatNumber = function(num, type) {
    var numSplit;
    // + or - before Number
    // exactly 2 decimal points
    // Comma separating the thousands

    //abs stands for absolute
    num = Math.abs(num);
    //method of number prototype to make our number have exactly 2 decimals
    num = num.toFixed(2);
    //
    numSplit = num.split(".");

    int = numSplit[0];
    if(int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];

    return (type === 'exp' ? sign = '-' : sign = "+") + ' ' + int + '.' + dec;
  };

  var nodeListForEach = function (list, callback) {
    for(var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputAmount).value)
      };
    },

    addListItem: function(obj, type) {
        var html, newHtml, element;
        //creat html string with placeholder text
        if(type === 'inc') {
          element = DOMstrings.incomeContainer;
          html = '<div class="incomeItem" id="inc-%id%"><div class="incomeItemTitle">%description%</div><div class="incomeItemRight"><div class="incomeItemValue">%value%</div><div class="item-delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        } else if(type === 'exp'){
          element = DOMstrings.expenseContaner;
          html = '<div class="expenseItem" id="exp-%id%"><div class="expenseItemTitle">%description%</div><div class="expenseItemRight"><div class="expenseItemValue">%value%</div><div class="budget-percent-value"></div><div class="item-delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        }
        //replace placeholder with actual DATA
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
        //insert the html into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

    },

      deleteListItem: function (selectorID) {

        var el = document.getElementById(selectorID);
        el.parentNode.removeChild(el);

      },

      clearFields: function() {
        var fields, fieldsArr;

        fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' +  DOMstrings.inputAmount);
        //tricks it into thinking the node list from above is an array, and passes it into a new array using the slice method
        fieldsArr = Array.prototype.slice.call(fields);

        fieldsArr.forEach(function(current, index, array) {
          current.value = "";
        });

        fieldsArr[0].focus();
      },

      displayBudget: function(obj) {

        obj.budget > 0 ? type = 'inc' : type = 'exp';

        document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
        document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
        document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');


        if(obj.percentage > 0) {
          document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
        } else {
          document.querySelector(DOMstrings.percentageLabel).textContent = '---';
        }
      },

      displayPercentages: function(percentages) {

        var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

        nodeListForEach(fields, function(current, index) {

          if(percentages[index] > 0) {
            current.textContent = percentages[index] + '%';
          } else {
            current.textContent = percentages[index] + '---';
          }
        });

      },

      displayMonth: function () {
        var now, year, month, months;

        now = new Date();

        month = now.getMonth();
        months = ['January', 'February', 'March', 'April', 'Mary', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        year = now.getFullYear();
        document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
      },

      changeType: function() {
        var fields = document.querySelectorAll(
          DOMstrings.inputType + ',' +
          DOMstrings.inputDescription + ',' +
          DOMstrings.inputAmount
        );

        nodeListForEach(fields, function(curEl) {
          curEl.classList.toggle('red-focus');
        });
        document.querySelector(DOMstrings.inputButtonRed).classList.toggle('red');
      },


    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();

/* ================================================================
============= MAIN APP CONTROLLER ============================= */

var appController = (function(budgetCtrl, UICtrl) {

  var setUpEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);

    document.addEventListener('keypress', function (event) {
      if(event.keycode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);

  };

  var updateBudget = function() {

    // Calculate budget
    budgetCtrl.calculateBudget();
    // Returns the budget
    var budget = budgetCtrl.getBudget();
    // Display Budget
    UICtrl.displayBudget(budget);
  };

  updatePercentages = function () {

    // Calculate the percentages
    budgetCtrl.calculatePercentages();
    // read them from budget CONTROLLER
    var percentages = budgetCtrl.getPercentages();
    // update UI
    UICtrl.displayPercentages(percentages);
  };

  var ctrlAddItem = function() {
    var input, newItem;

    // Get input DATA
    input = UICtrl.getInput();

    if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // Add item to budget CONTROLLER
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // Add tp UI
      UICtrl.addListItem(newItem, input.type);

      //clear the fields
      UICtrl.clearFields();

      // Calculate and update budget
      updateBudget();

      // Calculate and update percentages
      updatePercentages();
    }

  };

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if(itemID) {

      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. delet item from the data structure
      budgetCtrl.deleteItem(type, ID);
      // 2. delete the item from the UI
      UICtrl.deleteListItem(itemID);
      // 3. update and show the new budget
      updateBudget();
      // 4. Calculate and update percentages
      updatePercentages();
    }

  };

  return {
    init: function() {
      console.log("app started");
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget:0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setUpEventListeners();
    }
  }

})(budgetController, UIController);

appController.init();
