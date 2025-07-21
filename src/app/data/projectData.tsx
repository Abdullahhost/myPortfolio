import { ProjectDetailsType, ProjectType } from "../type/ProjectType"




export const projectList: ProjectDetailsType = [
    {
        pName: 'Multi-tenant System',
        pImage: "/bookitu/calendar.png",
        backgroundLayout: "#F0FFFF",
        PCategory: "Appointment Booking System",
        pLink: "/project#multitanentsystem",


    },
    {
        pName: 'Hospital Management System',
        pImage: "/hospital-management/admin_dashboard.png",
        backgroundLayout: "#F5F5DC",
        PCategory: "Custom Software Development",
        pLink: "/project#hospitalmanagementsystem",

    },
    {
        pName: 'ERP System',
        pImage: "/atoz-binirman/expense.png",
        backgroundLayout: "#FFE4E1",
        PCategory: "Custom Software Development",
        pLink: "/project#erpsystem",

    },
    {
        pName: 'Files Conversion System',
        pImage: "/file-conversion-site/file_conversion.png",
        backgroundLayout: "#C6C6C6",
        PCategory: "Custom Software Development",
        pLink: "/project#filesconversionsystem",

    }, {
        pName: 'Social Media Apps',
        pImage: "/identishare/identishare.png",
        backgroundLayout: "#F5DEB3",
        PCategory: "Social Media App Development",
        pLink: "/project#socialmediaapps",

    },
]




export const projectArray: ProjectType[] = [
    {
        id: 1,
        title: "Multi-Tenant Beauty Salon System",
        description: 'Bookitu: A cutting-edge system with Stripe integration, customizable calendars, and dynamic email templates.',
        image: "/bookitu/calendar.png",
        allImage: ["/bookitu/add_new_discount.png", "/bookitu/add_stylist.png", "/bookitu/calendar.png", "/bookitu/make_payment.png", "/bookitu/package_list.png", "/bookitu/reports.png", "/bookitu/select_stylist_time.png", "/bookitu/select_treatment.png", "/bookitu/tenant_profile.png"],
        scrollIdLink: "multitanentsystem"
    },
    {
        id: 2,
        title: "Hospital Management System",
        description: 'A comprehensive platform to streamline medical operations, manage patient records, and improve healthcare delivery.',
        image: "/hospital-management/admin_dashboard.png",
        allImage: ["/hospital-management/account_payment.png", "/hospital-management/add_new_patient.png", "/hospital-management/admin_dashboard.png", "/hospital-management/login.png", "/hospital-management/patient_dashboard.png", "/hospital-management/attendance_dashboard.png", "/hospital-management/pharmacy_dashboard.png", "/hospital-management/queue_dashboard.png", "/hospital-management/transaction.png", "/hospital-management/welcome.png"],
        scrollIdLink: "hospitalmanagementsystem"

    },
    {
        id: 3,
        title: "ERP system",
        description: 'A comprehensive platform to streamline medical operations, manage patient records, and improve healthcare delivery.',
        image: "/atoz-binirman/expense.png",
        allImage: ["/atoz-binirman/expense.png", "/atoz-binirman/income.png", "/atoz-binirman/job.png", "/atoz-binirman/log.png", "/atoz-binirman/report.png", "/atoz-binirman/subhead.png"],
        scrollIdLink: "erpsystem"
    },
    {
        id: 4,
        title: "Social Media Application",
        description: 'A platform that connects users with seamless interaction, dynamic feeds, and real-time notifications.',
        image: "/identishare/identishare.png",
        allImage: ["/identishare/identishare.png"],
        scrollIdLink: "socialmediaapps"

    },
    {
        id: 5,
        title: "File Conversion Site",
        description: 'A user-friendly web solution for converting files across multiple formats efficiently and securely.',
        image: "/file-conversion-site/file_conversion.png",
        allImage: ["/file-conversion-site/file_conversion.png"],
        scrollIdLink: "filesconversionsystem"

    },

]