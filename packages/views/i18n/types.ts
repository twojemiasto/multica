export type Locale = "en" | "pl";

export const locales: Locale[] = ["en", "pl"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
};

export type AppDict = {
  common: {
    save: string;
    cancel: string;
    create: string;
    delete: string;
    edit: string;
    close: string;
    confirm: string;
    loading: string;
    search: string;
    back: string;
    next: string;
    yes: string;
    no: string;
    none: string;
    ok: string;
  };
  nav: {
    inbox: string;
    myIssues: string;
    issues: string;
    projects: string;
    agents: string;
    skills: string;
    runtimes: string;
    autopilots: string;
    settings: string;
    personal: string;
    workspace: string;
    configure: string;
    pinned: string;
    newIssue: string;
    logout: string;
  };
  status: {
    backlog: string;
    todo: string;
    inProgress: string;
    inReview: string;
    done: string;
    blocked: string;
    cancelled: string;
  };
  priority: {
    urgent: string;
    high: string;
    medium: string;
    low: string;
    noPriority: string;
  };
  projectStatus: {
    planned: string;
    inProgress: string;
    paused: string;
    completed: string;
    cancelled: string;
  };
  issue: {
    new: string;
    titlePlaceholder: string;
    descriptionPlaceholder: string;
    createIssue: string;
    updateStatus: string;
    assignee: string;
    project: string;
    labels: string;
    dueDate: string;
    subIssues: string;
    comments: string;
    createFailed: string;
    updateStatusFailed: string;
    hideColumn: string;
    addIssue: string;
    noIssues: string;
  };
  project: {
    new: string;
    namePlaceholder: string;
    descriptionPlaceholder: string;
    created: string;
    createFailed: string;
  };
  workspace: {
    create: string;
    name: string;
    url: string;
    chooseDifferentUrl: string;
    createFailed: string;
    switcher: string;
    pendingInvitations: string;
    join: string;
    decline: string;
    unpin: string;
  };
  settings: {
    title: string;
    myAccount: string;
    profile: string;
    account: string;
    appearance: string;
    apiTokens: string;
    general: string;
    repositories: string;
    members: string;
    language: string;
    languageDescription: string;
    preferences: string;
    name: string;
    clickToUploadAvatar: string;
    updateProfile: string;
    updating: string;
    profileUpdated: string;
    failedToUpdateProfile: string;
    avatarUpdated: string;
    failedToUploadAvatar: string;
  };
  empty: {
    noResults: string;
    noAgents: string;
    noChatSessions: string;
    noItems: string;
  };
  auth: {
    login: string;
    loginCta: string;
    logout: string;
    email: string;
    emailPlaceholder: string;
    verificationCode: string;
    continue: string;
  };
};
