'use strict';

require('intl/locale-data/jsonp/en.js');

const phrases = {
  ok: 'OK',
  my_accounts: 'My accounts',
  owes_you: 'owes you',
  you_owe: 'you owe',
  settled_up: 'settled up',
  save: 'Save',
  delete: 'Delete',
  cancel: 'Cancel',
  me: 'Me',
  description: 'Description',
  paid_by: 'Paid by',
  paid_by_name: 'Paid by %{name}',
  add_a_new_person: 'Add a new person',
  add_a_new_account: 'Add a new account',
  split_equaly: 'Split equaly',
  split_unequaly: 'Split unequaly',
  split_shares: 'Split by shares',
  paid_for: 'Paid for',
  expense_new: 'New expense',
  expense_edit: 'Edit expense',
  expense_description_hint: 'e.g. Burgers',
  expense_related_account: 'Belong to the account',
  expense_confirm_delete: 'Delete this expense?',
  expense_confirm_delete_edit: 'Delete changes made on this expense?',
  expense_deleted: 'Expense deleted',
  expense_add_error: {
    amount_empty: 'Add an amount.',
    paid_for_empty: 'Add the person who paid.',
    paid_by_empty: 'No new debt. Check for who the expense was made.',
  },
  expense_saved: 'Expense saved',
  expense_latest: 'Latest expense: %{date}',
  expense_no: 'No expense',
  expense_list_empty: 'Expenses you create appear here',
  account_list_empty: 'Accounts you create appear here',
  account_edit: 'Edit account',
  account_name_hint: 'e.g. Summer holidays',
  account_add_new: 'New account',
  account_add_confirm_delete: 'Delete this account?',
  account_add_confirm_delete_edit: 'Delete changes made on this account?',
  account_add_shared: 'Account shared',
  account_add_saved: 'Account saved',
  account_delete_title: 'Delete account',
  account_delete_description: 'If you delete, you will lose this account\'s expenses.',
  account_deleted: 'Account deleted',
  shares: 'share(s)',
  settings: 'Settings',
  expenses: 'Expenses',
  balance: 'Balance',
  debts: 'Debts',
  in_currency: 'In %{currency}',
  name: 'Name',
  contact_add_error: {
    already: 'This contact already exist.',
    no_name: 'This contact can\'t be added, he has no name.',
  },
  members: 'Members',
  version: 'Version',
  facebook_login: 'Log in with Facebook',
  facebook_you_are_logged: 'You are logged with facebook',
  export: 'Export',
  import: 'Import',
  data: 'Data',
};

module.exports = phrases;
