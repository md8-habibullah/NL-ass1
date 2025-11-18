!!!

-----

# TypeScript : আমরা আলোচনা করব `any`, `unknown`, `never` এর পার্থক্য এবং `Enum` এর ব্যবহার নিয়ে।
# Be Appreciate, Pain to Write in Bangla (some keyboard isn't available Bangla, need use tools_)
 
-----

### **১. `any`, `unknown` এবং `never` এর মধ্যে পার্থক্য কী?**

এই তিনটি টাইপ দেখতে এক রকম মনে হলেও কাজের ক্ষেত্রে আকাশ-পাতাল তফাত।

  * **`any` (বেপরোয়া):** এটি TypeScript-এর চেকিং সিস্টেমকে পুরোপুরি বন্ধ করে দেয়। `any` ব্যবহার করলে আপনি যা খুশি তাই করতে পারেন, কিন্তু এতে বাগ (bug) হওয়ার সম্ভাবনা বেড়ে যায়। এটা যতটা সম্ভব এড়িয়ে চলাই ভালো।
  * **`unknown` (সতর্ক):** এটি `any` ভদ্র সংস্করণ। কোনো ভেরিয়েবলের টাইপ জানা না থাকলে এটি ব্যবহার করা হয়। তবে `unknown` টাইপ নিয়ে কাজ করার আগে আপনাকে অবশ্যই চেক করে নিতে হবে যে এটি আসলে কী টাইপ (Type Checking), নাহলে TypeScript এরর দেবে। এটি নিরাপদ।
  * **`never` (অসম্ভব):** এটি এমন একটি টাইপ যা কখনো ঘটে না। সাধারণত কোনো ফাংশন যদি সবসময় **Error throw** করে অথবা **Infinite loop**-এ চলে (মানে ফাংশনটি কখনো শেষ হয় না), তখন তার রিটার্ন টাইপ হয় `never`।

**উদাহরণ:**

```typescript
// ১. any: যা খুশি তাই করা যায় (বিপজ্জনক)
let lolyPop: any = 10;
lolyPop = "Ami Khai Nah"; 
lolyPop.toUpperCase(); // কোনো এরর দেবে না, যদিও এটি এখন স্ট্রিং!

// ২. unknown: ব্যবহারের আগে চেক করতে হয় (নিরাপদ)
let halfProtection: unknown = "New Place";
// halfProtection.toUpperCase(); // Error দেবে, কারণ TS জানে না এটা স্ট্রিং কিনা।

if (typeof halfProtection === "string") {
    console.log(halfProtection.toUpperCase()); // এখন কাজ করবে।
}

// ৩. never: যা কখনো শেষ হয় না
function maybeError(msg: string): never {
    throw new Error(msg); // ফাংশনটি এখানেই ক্র্যাশ করবে, কিছু রিটার্ন করবে না।
}
```

-----

### **২. TypeScript-এ `Enum` কেন ব্যবহার করা হয়?**

`Enum` (Enumeration) হলো কিছু **ফিক্সড বা কনস্ট্যান্ট ভ্যালুর** একটি গ্রুপ। কোডের মধ্যে এলোমেলো স্ট্রিং বা নম্বর ব্যবহার না করে `Enum` ব্যবহার করলে কোড অনেক বেশি ক্লিন এবং রিডেবল (Readable) হয়।

TypeScript-এ দুই ধরনের Enum বেশি ব্যবহৃত হয় (its not joke):

**ক) Numeric Enum (ডিফল্ট):**
এখানে ভ্যালুগুলো অটোমেটিক ০ থেকে শুরু হয়। (can changable)

```typescript
enum Checkkk {
    Ami,    // 0
    Kuntu,  // 1
    Akta,  // 2
    Enumm  // 3
}

console.log(Ami.Up); // Output: 0
```

**খ) String Enum:**
এখানে আপনি নিজেই ভ্যালু বলে দিতে পারেন, যা ডিবাগিংয়ের সময় বোঝা সহজ হয়।

```typescript
enum AssStatus {
    ass_started = "SUCCESS",
    ass_notComplited = "FAILURE",
    ass_running = "PENDING"
}

let myAssStatus: AssStatus = AssStatus.Success;
console.log(myAssStatus); // Output: "SUCCESS"
```
## Thank You for Reading Entire Page ("_")