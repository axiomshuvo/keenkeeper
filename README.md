# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern web application designed to help you maintain meaningful relationships by tracking interactions with your friends. It allows you to log calls, texts, and video chats, visualize your communication patterns, and never lose touch again.

---

## [**Live Link**](https://keenkeeper-peach.vercel.app/)

## 🚀 Features

- 👫 Manage and view all your friends
- 📄 Detailed friend profile pages
- ⚡ Quick Check-In (Call, Text, Video)
- 📜 Timeline of all interactions
- 📊 Analytics with Pie Chart (Recharts)
- 🔍 Filter interactions by type
- 🔔 Toast notifications on actions
- 📱 Fully responsive design

---

## 🛠️ Technologies Used

- Next.js (App Router)
- React
- Tailwind CSS
- Recharts
- React Hot Toast
- Context API

---

## 📁 Project Structure

```
app/
├── components/
├── context/
├── timeline/
├── stats/
├── layout.js
├── page.js
public/
data/
└── friends.json

```

---

## 🏠 Home Page

- Displays all friends in a responsive grid
- Shows:
  - Profile image
  - Name
  - Days since last contact
  - Tags
  - Status (overdue / almost due / on-track)

---

## 👤 Friend Details Page

### Left Section:

- Profile info (image, name, bio, email, tags)
- Action buttons:
  - Snooze 2 Weeks
  - Archive
  - Delete

### Right Section:

- 📊 Stats Cards (Days, Goal, Next Due)
- 🎯 Relationship Goal
- ⚡ Quick Check-In:
  - Call
  - Text
  - Video

👉 Clicking any action:

- Adds a timeline entry
- Shows a toast notification

---

## 📜 Timeline Page

- Shows all interaction history
- Each entry includes:
  - 📅 Date
  - 🔣 Icon (Call/Text/Video)
  - 📝 Title

### 🔍 Filtering

- Filter by:
  - Call
  - Text
  - Video

---

## 📊 Stats Page (Analytics)

- Pie chart showing:
  - Call count
  - Text count
  - Video count

---

## 📦 Data Source

/data/friends.json

Example:

```
{
"id": 1,
"name": "John Doe",
"picture": "url",
"email": "email",
"days_since_contact": 12,
"status": "overdue",
"tags": ["college"],
"bio": "description",
"goal": 14,
"next_due_date": "2025-07-20"
}
```

---

## ⚙️ State Management

Using Context API:

```
{
id,
type: "call" | "text" | "video",
friendId,
friendName,
createdAt
}
```

---

## 🎨 UI Highlights

- Clean modern design
- Color-coded status
- Responsive layout
- Empty state handling
- Toast notifications

---

## 🔥 Additional Features

- ✅ 404 Page for invalid routes
- ✅ Loading state while fetching data
- ✅ No crash on page reload
- ✅ Minimum 8 meaningful Git commits

---

## 📱 Responsive Design

- Mobile
- Tablet
- Desktop

---

## 🧠 Key Learnings

- Next.js App Router
- Client vs Server Components
- Context API
- Data filtering & mapping
- Chart data transformation

---

## 🏁 Conclusion

KeenKeeper helps you stay connected with friends by tracking and visualizing your interactions in a simple and effective way.

👨‍💻 Author [Pradipta Sarker](https://axiomshuvo.pro.bd/)
