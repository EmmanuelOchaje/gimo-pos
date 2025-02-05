const EditProfile = () => {
  return (
    <div className="mx-5 py-5">
      <p className="bg-[#6665ff1a] rounded-lg text-[#6665ff] font-medium p-1 w-fit text-[12px] md:text-2xl md:p-2 h-fit">
        Edit Profile
      </p>

      <p className="text-black py-5 leading-6">
        To edit user profile, follow the following steps.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit text-[20px] h-fit">
        Adding Cashier
      </p>
      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. Click the “Profile” button from the bottom navigation panel.
      </p>
      <p className="text-black pb-1 leading-6">
        2. Click the section of user profile that you want to edit and update.
      </p>
    </div>
  );
};

export default EditProfile;
