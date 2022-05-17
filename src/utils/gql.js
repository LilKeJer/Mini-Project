import { gql } from "@apollo/client";

export const DAFTAR_LAGU = gql`
  query MyQuery {
    song {
      id_song
      time
      title
      url
    }
  }
`;

export const USERS = gql`
  query MyQuery {
    user {
      id_user
      email
      nama
      password
    }
  }
`;

export const DAFTAR_TOUR = gql`
  query MyQuery {
    tour {
      id_tour
      tanggal
      tempat
      tiket
    }
  }
`;

export const TAMBAH_INTERESTED_TOUR = gql`
  mutation MyMutation($id_user: Int!, $id_tour: Int!) {
    insert_interested_tour(objects: { id_tour: $id_tour, id_user: $id_user }) {
      returning {
        id_interested_tour
      }
    }
  }
`;

export const INTERESTED_SONG = gql`
  query MyQuery($id: Int!) {
    interested_song(where: { id_user: { _eq: $id } }) {
      id_song
      song {
        title
        time
      }
      interested
    }
  }
`;

export const INTERESTED_SONG_SUBS = gql`
  subscription MySubscription($id: Int!) {
    interested_song(where: { id_user: { _eq: $id } }) {
      user {
        nama
      }
      song {
        id_song
        time
        title
      }
      interested
    }
  }
`;
export const LOVE = gql`
  mutation MyMutation($id: Int!, $interested: Boolean!) {
    update_interested_song(
      where: { id_song: { _eq: $id } }
      _set: { interested: $interested }
    ) {
      returning {
        interested
      }
    }
  }
`;

export const INTERESTED_TOUR_SUBS = gql`
  subscription MySubscription($id: Int!) {
    interested_tour(where: { id_user: { _eq: $id } }) {
      tour {
        tanggal
        tempat
        tiket
      }
      id_interested_tour
    }
  }
`;

export const DELETE_INTERESTED_TOUR = gql`
  mutation MyMutation($id: Int!) {
    delete_interested_tour(where: { id_interested_tour: { _eq: $id } }) {
      returning {
        tour {
          tempat
        }
      }
    }
  }
`;

export const TAMBAH_USER = gql`
  mutation MyMutation($nama: String!, $email: String!, $password: String!) {
    insert_user(objects: { nama: $nama, email: $email, password: $password }) {
      returning {
        id_user
      }
    }
  }
`;

export const TAMBAH_MUSIC_PROFILE = gql`
  mutation MyMutation($id_user: Int!) {
    insert_interested_song(
      objects: [
        { id_user: $id_user, id_song: 1, interested: false }
        { id_user: $id_user, id_song: 2, interested: false }
        { id_user: $id_user, id_song: 3, interested: false }
        { id_user: $id_user, id_song: 4, interested: false }
        { id_user: $id_user, id_song: 5, interested: false }
        { id_user: $id_user, id_song: 6, interested: false }
        { id_user: $id_user, id_song: 7, interested: false }
        { id_user: $id_user, id_song: 8, interested: false }
        { id_user: $id_user, id_song: 9, interested: false }
        { id_user: $id_user, id_song: 10, interested: false }
        { id_user: $id_user, id_song: 11, interested: false }
        { id_user: $id_user, id_song: 12, interested: false }
      ]
    ) {
      affected_rows
    }
  }
`;
