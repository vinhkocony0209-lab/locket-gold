/*
Unlock Locket Gold
*/

var obj = JSON.parse($response.body);

obj.subscriptions = [
  {
    "identifier": "gold_yearly",
    "expires_at": "2099-12-31T23:59:59Z",
    "purchase_date": "2023-01-01T00:00:00Z"
  }
];
obj.entitlements = ["gold"];

$done({body: JSON.stringify(obj)});
