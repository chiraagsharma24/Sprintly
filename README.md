# 🏃 Sprintly

**Streamline Your Workflow with Sprintly**  
Empower your team with our intuitive, full-stack project management solution tailored for modern software teams.

Sprintly simplifies how you manage tasks, sprints, and organizations. Whether you're a startup, a freelancer, or a growing team, Sprintly gives you the flexibility to break down complex projects into manageable sprints and visualize your team's progress with a clean Kanban interface. 

---

### 🔗 Live Demo
[Check it out here](https://sprintly-opal.vercel.app)

-----

### 🎥 Recorded Demo Video
[Watch the demo](https://drive.google.com/drive/folders/1eKLu9DcZhR5Dd6UfrprsHXPhtDv4D3pP?usp=sharing)

---

## 🚀 Features

- 🏢 Create and manage multiple **Organizations**
- 📁 Each organization can handle **multiple Projects**
- 🔄 Projects are divided into **Sprints** for better planning and iteration
- 📝 Inside each sprint, create and manage issues across four categories:
  - ✅ Todo
  - 🚧 In Progress
  - 🕵️ In Review
  - ✔️ Done
- 🧩 **Kanban Board** with drag-and-drop functionality for smooth task management
- 👥 User authentication with Clerk (Sign in / Sign up / Onboarding)
- 🌗 Clean, responsive, and accessible UI with **Dark Mode** support
- 📊 Scalable data management with PostgreSQL on **NeonDB**
- 📦 Optimized state handling with built-in server actions (Next.js App Router)
- ⚡ Blazing fast and modern UI with **Shadcn UI** + **Tailwind CSS**

---

## 🛠 Tech Stack

- **Frontend:** React.js, Next.js (App Router), Tailwind CSS, Shadcn UI  
- **Backend:** Next.js Server Actions  
- **Authentication:** Clerk  
- **Database:** PostgreSQL via NeonDB  
- **Deployment:** Vercel / Your preferred platform

---

## 🔐 Environment Variables

Create a `.env.local` file in the root and add the following:

```env
# PostgreSQL (NeonDB)
DATABASE_URL=""

# Clerk Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""

# Clerk Routing URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL="" 
NEXT_PUBLIC_CLERK_SIGN_UP_URL=""
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=""
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=""
```

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo  
2. Create your feature branch (`git checkout -b feature/foo`)  
3. Commit your changes (`git commit -am 'Add some foo'`)  
4. Push to the branch (`git push origin feature/foo`)  
5. Open a PR

---

### 🎨 Designed and built by [**Chirag Sharma**](https://github.com/chiraagsharma24)

