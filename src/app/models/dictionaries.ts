export type Dictionary = HeroDictionary &
  InformationDictionary &
  CountdownDictionary &
  ToastMasterDictionary &
  RSVPDictionary;

export type HeroDictionary = {
  heroSection: {
    and: string;
  };
};

export type CountdownDictionary = {
  countdownSection: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

export type InformationDictionary = {
  informationSection: {
    misc: {
      text: string;
    };
    dresscode: {
      name: string;
      description: string;
    };
    children: {
      name: string;
      description: string;
    };
    gifts: {
      name: string;
      description: string;
    };
    rsvp: {
      name: string;
      description: string;
    };
    location: {
      name: string;
      description: string;
    };
    language: {
      name: string;
      description: string;
    };
  };
};

export type ToastMasterDictionary = {
  toastmastersSection: {
    title: string;
    paragraph: string;
  };
};

export type RSVPDictionary = {
  rsvpSection: {
    misc: {
      title: string;
    };
    form: {
      firstName: {
        name: string;
      };
      lastName: {
        name: string;
      };
      phone: {
        name: string;
        placeholder: string;
      };
      "allergies/preferences": {
        name: string;
        placeholder: string;
      };
      speech: {
        text: string;
      };
      button: {
        default: string;
        sent: string;
        loading: string;
      };
      errors: {
        empty: string;
        wrong: string;
      };
    };
  };
};
