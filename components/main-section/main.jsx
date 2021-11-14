import React, { useState } from "react";
import Link from "next/link";
import {
  MdSettings,
  MdCoffee,
  MdSupervisedUserCircle,
  MdSave,
} from "react-icons/md";
import Stories from "../tab-components/stories";
import Followers from "../followers";
import FollowButton from "../follow-button";

const Main = ({ pages }) => {
  const tab_class =
    "w-1/3 stories_tab flex flex-col items-center px-4 py-2 border-b-2 border-transparent";
  const [tab, setTab] = useState("stories");
  const handleTabs = (tab) => setTab(tab);
  return (
    <div className="main_section text-white px-4 py-2 flex">
      <div className="main_section__left w-4/12 mr-1 overflow-y-auto h-screen">
        <div className="main_section__left__profile_section">
          <div className="profile_section__image w-full p-1 border relative shadow">
            <img
              src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?cs=srgb&dl=pexels-christina-morillo-1181298.jpg&fm=jpg"
              alt='Hridoy Mozumder"s Code tabil'
              className="h-64 w-full"
            />
            <div className="profile_section__profile_picture absolute">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="Hridoy Mozumder profile picture"
                className="rounded-full w-28 h-28 object-cover -mt-20 ml-4 shadow border p-0.5"
              />
            </div>
          </div>
          <div className="profile_section__profile_details mt-10">
            <div className="flex justify-between items-center shadow-lg p-2">
              <div className="profile_details_name">
                <h1 className="font-semibold">John Doe</h1>
                <p className="text-xs">A Code Lover</p>
              </div>
              <div className="profile_details_buttons flex items-center">
                <FollowButton />
                <Link href="/add-story">
                  <a className="bg-blue-700 text-sm px-4 py-2 mr-2 rounded hover:bg-blue-500">
                    Add Story
                  </a>
                </Link>
                <Link href="/update">
                  <a className="py-2 rounded">
                    <MdSettings
                      size={30}
                      className="block bg-transparent transition transform duration-200 hover:-rotate-45"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="profile_details_stories">
              <div className="profile_details_stories__tabs flex items-center border-b border-gray-800 mb-4">
                <div
                  className={`${tab_class} ${"stories" === tab && "active"}`}
                  onClick={() => handleTabs("stories")}
                >
                  <MdCoffee size={20} />
                  <p>Story</p>
                </div>
                <div
                  className={`${tab_class} ${"followers" === tab && "active"}`}
                  onClick={() => handleTabs("followers")}
                >
                  <MdSupervisedUserCircle size={20} />
                  <p>Followers</p>
                </div>
                <div
                  className={`${tab_class} ${"saved" === tab && "active"}`}
                  onClick={() => handleTabs("saved")}
                >
                  <MdSave size={20} />
                  <p>Saved</p>
                </div>
              </div>
              <div className="profile_details_stories__components">
                {"stories" === tab && <Stories />}
                {"followers" === tab && (
                  <div className="profile_details_stories__story">
                    <Followers />
                  </div>
                )}
                {"saved" === tab && (
                  <div className="profile_details_stories__story">
                    <h1>Saved Components</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_section__right w-8/12 px-4">{pages}</div>
    </div>
  );
};

export default Main;
